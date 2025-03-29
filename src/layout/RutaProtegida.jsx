import { Outlet, Navigate } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';


const RutaProtegida = () => {
    const { auth, cargando } = useAuth() // Obtengo el estado de autenticacion
    if(cargando) return 'cargando...' // Si esta cargando, no muestro nada

    return (
        <>
            <Header />
                {auth?._id ? (
                    <main className='container mx-auto mt-10'>
                        <Outlet />
                    </main>
                ): <Navigate to="/" /> }
            <Footer />
        </>
    )
};

export default RutaProtegida;
