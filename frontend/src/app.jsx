import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './css/global.css';
import BarraNavegacion from '../src/componentes/BarraNavegacion';
import ListaEventos from '../src/componentes/ListaEventos';
import FormularioEvento from '../src/componentes/FormularioEvento';
import InicioSesion from '../src/componentes/InicioSesion';
import Registro from '../src/componentes/Registro';
import Inicio from '../src/paginas/Inicio';
import Eventos from '../src/paginas/Eventos';
import CrearEvento from '../src/paginas/CrearEvento';
import EditarEvento from '../src/paginas/EditarEvento';
import { AuthProvider, useAuth } from '../src/autenticacion/autenticacon';


const App = () => {
    const { usuario } = useAuth();

    return (
        <Router>
            <nav className="navbar">
                {usuario ? (
                    <>
                        <Link to="/">INICIO</Link>
                        <Link to="/eventos">LISTAR EVENTOS</Link>
                        <Link to="/crear-evento">CREAR EVENTO</Link>
                        <Link to="/editar-evento">EDITAR EVENTO</Link>
                        <Link to="/eliminar-evento">ELIMINAR EVENTO</Link>
                    </>
                ) : (
                    <>
                        <nav className="navbar">
                            <span>Administrador, Bienvenido a Gestión de Eventos</span>
                        </nav>
                    </>
                )}
            </nav>

            {usuario && <BarraNavegacion />}

            <Routes>
                {!usuario ? (
                    <>
                        <Route path="/*" element={<Navigate to="/register" />} />
                        <Route path="/register" element={<Registro />} />
                        <Route path="/login" element={<InicioSesion />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/eventos" element={<Eventos />} />
                        <Route path="/crear-evento" element={<CrearEvento />} />
                        <Route path="/editar-evento/:id" element={<EditarEvento />} />
                        <Route path="/eventos/lista" element={<ListaEventos />} />
                        <Route path="/eventos/formulario" element={<FormularioEvento />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}

const RootApp = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

export default RootApp;
