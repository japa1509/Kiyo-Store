import { AuthContext } from ".";
import { auth } from "../config/firebase";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Escucha cambios de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
            setUser({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName, // Asegúrate de que el nombre esté aquí
            });
          } else {
            setUser(null);
          }
            setLoading(false);
        });

        return () => unsubscribe(); // Limpia el listener al desmontar
    }, []);

    // Función para registrar un nuevo usuario
    const register = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (error) {
            console.error("Error al registrar:", error.message);
            throw error; // Para manejarlo en los componentes
        }
    };

    // Función para iniciar sesión
    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            throw error; // Para manejarlo en los componentes
        }
    };

    return (
        <AuthContext.Provider value={{ user,setUser, loading, register, signIn }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = { children: PropTypes.node };