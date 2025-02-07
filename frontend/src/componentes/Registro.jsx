import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../servicios/api';


const Registro = () => {
    const [usuario, setUsuario] = useState({ nombre: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const validarFormulario = () => {
        if (!usuario.nombre.trim()) {
            alert('El nombre es obligatorio');
            return false;
        }
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;    
        if (!emailRegex.test(usuario.email)) {
            alert('Correo electrónico no válido');
            return false;
        }
        if (usuario.password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validarFormulario()) return;

        setLoading(true);
        try {
            api.post('/register');
            alert('Usuario registrado correctamente');
            navigate('/login');
        } catch (error) {
            alert(error.response?.data?.message || 'Error al registrar usuario');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <nav className="navbar">
                <span>Administrador, Bienvenido a Gestión de Eventos</span>
            </nav>
            <div className="container">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nombre" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={usuario.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={usuario.password} onChange={handleChange} required />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrarse'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registro;
