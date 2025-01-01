import { Layout } from "../../Components/Layout";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página No Encontrada</h1>
                <p className="text-lg text-gray-700 mb-6">Lo sentimos, pero la página que estás buscando no existe.</p>
                <Link to="/" className="px-4 py-2 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white rounded-lg  transition-all duration-300">
                    Volver al Inicio
                </Link>
            </div>
        </Layout>
    );
}
