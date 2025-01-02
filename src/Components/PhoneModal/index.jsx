import { useState } from "react";
import PropTypes from "prop-types";
export const PhoneModal =({ closeModal, phoneNumber, setPhoneNumber }) => {
    const [inputValue, setInputValue] = useState(phoneNumber || "");

    const savePhoneNumber = () => {
        setPhoneNumber(inputValue);
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {phoneNumber ? "Edit Phone Number" : "Add Phone Number"}
                </h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <div className="flex justify-end gap-4">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={savePhoneNumber}
                        className={`px-4 py-2 ${
                            inputValue
                                ? "bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        } rounded-lg`}
                        disabled={!inputValue}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
PhoneModal.propTypes = { 
    closeModal: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string,
    setPhoneNumber: PropTypes.func.isRequired };
