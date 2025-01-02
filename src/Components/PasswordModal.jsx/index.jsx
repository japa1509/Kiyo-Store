import { useState } from "react";
import PropTypes from "prop-types";
export const PasswordModal = ({ closeModal, savePassword }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSave = () => {
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        savePassword(newPassword, currentPassword);
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="space-y-4">
                    <input
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none"
                    />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className={`px-4 py-2 ${
                            newPassword && confirmPassword
                                ? "bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        } rounded-lg`}
                        disabled={!newPassword || !confirmPassword}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

PasswordModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    savePassword: PropTypes.func.isRequired};
