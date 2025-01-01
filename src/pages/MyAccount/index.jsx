import { Layout } from "../../Components/Layout";
import { useAuth } from "../../context/useAuth";
import { useState } from "react";
import { PhoneModal } from "../../Components/PhoneModal";
import { PasswordModal } from "../../Components/PasswordModal.jsx";
import { FacebookIcon, GoogleIcon, AppleIcon } from "../../Components/Icons";
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export function MyAccount() {
    const { user } = useAuth();
    const [phoneNumber, setPhoneNumber] = useState("+57 00000000"); // Estado del número de teléfono
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // Estado para el modal de contraseña

    const togglePasswordModal = () => setIsPasswordModalOpen(!isPasswordModalOpen);

    const savePassword = async (newPassword, currentPassword) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!currentPassword) { 
            alert("Current password is required for authentication."); 
            return;
        }
        if (user) {
            try {
                // Re-autenticar al usuario 
                 const credential = EmailAuthProvider.credential(user.email, currentPassword); 
                 await reauthenticateWithCredential(user, credential);
                await updatePassword(user, newPassword);
                console.log("Password updated successfully");
                alert("Your password has been updated successfully!");
            } catch (error) {
                console.error("Error updating password:", error.message);
                alert("An error occurred while updating your password. Please try again.");
            }
        } else {
            alert("No user is logged in. Please sign in first.");
        }
    };


    return (
        <Layout>
            <section className="max-w-2xl w-full mx-auto mb-12 p-6 bg-white rounded-lg shadow-md mt-12">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Account Settings</h1>
                {/* Imagen de perfil y nombre del usuario */}
                <div className="flex items-center gap-4 mb-6 border-b pb-4">
                    <img
                        src={user?.photoURL || "/Avatar.webp"}
                        alt="Profile"
                        className="w-20 h-20 rounded-full shadow-md"
                    />
                    <div>
                        <p className="text-lg font-medium text-gray-700">{user?.displayName || "Usuario desconocido"}</p>
                        <p className="text-gray-500 text-sm">{user?.email || "Correo no disponible"}</p>
                    </div>
                </div>
                <div className="space-y-6">
                    {/* Número de teléfono */}
                    <div className="flex justify-between items-center border-b pb-4 ">
                        <div>
                            <span className="text-gray-700 font-medium">Mobile phone number</span>
                            <p className="text-gray-500 text-sm">{phoneNumber}</p>
                        </div>
                        <button
                        onClick={toggleModal}
                        className="w-24 px-3 py-2 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white hover:scale-102 font-medium rounded-lg"
                    >
                        {phoneNumber ? "Edit" : "Add"}
                    </button>
                    </div>
                    {/* Correo electrónico */}
                    <div className="flex justify-between items-center border-b pb-4">
                        <div>
                            <span className="text-gray-700 font-medium">Email</span>
                            <p className="text-gray-500">{user?.email || "No disponible"}</p>
                        </div>
                        <button className="w-24 px-3 py-2 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white hover:scale-102 font-medium rounded-lg">
                            Edit
                        </button>
                    </div>
                    {/* Contraseña */}
                    <div className="flex justify-between items-center border-b pb-4">
                        <div>
                            <span className="text-gray-700 font-medium">Password</span>
                            <p className="text-gray-500">***********</p>
                        </div>
                        <button 
                        onClick={togglePasswordModal}
                        className="w-24 px-3 py-2 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white hover:scale-102 font-medium rounded-lg">
                            Edit
                        </button>
                    </div>
                    {/* Cuentas de terceros */}
                    <div>
                        <span className="text-gray-700 font-medium mb-2 block">Third-party accounts</span>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b pb-4">
                                <span className="flex items-center gap-2">
                                    <GoogleIcon/>
                                    <p>Google</p>
                                </span>
                                <button className="w-28 px-4 py-2  text-[#ff6c00] font-medium rounded-lg ">
                                Linked
                                </button>
                            </div>
                            <div className="flex justify-between items-center border-b pb-4">
                                <span className="flex items-center gap-2">
                                    <FacebookIcon/>
                                    <p>Facebook</p>
                                </span>
                                <button className="w-24 px-3 py-2 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white hover:scale-102 font-medium rounded-lg">
                                    Link
                                </button>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <AppleIcon/>
                                    <p>Apple</p>
                                </span>
                                <button className="w-24 px-3 py-2 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white hover:scale-102 font-medium rounded-lg">
                                    Link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {isModalOpen && (
                    <PhoneModal
                        closeModal={toggleModal} // Función para cerrar el modal
                        phoneNumber={phoneNumber} // Número de teléfono actual
                        setPhoneNumber={setPhoneNumber} // Función para actualizar el número
                    />
                )}

                {/* Modal de contraseña */}
                {isPasswordModalOpen && (
                    <PasswordModal
                        closeModal={togglePasswordModal} // Función para cerrar el modal
                        savePassword={savePassword} // Función para guardar la contraseña
                    />
                )}
            </section>
        </Layout>
    );
}

