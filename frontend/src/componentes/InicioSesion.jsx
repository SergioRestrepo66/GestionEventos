import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../servicios/api';


const InicioSesion = ({ setAutenticado }) => {
    const [credenciales, setCredenciales] = useState({ nombre: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', credenciales);
            
            // Verificar si la respuesta contiene el token
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                setAutenticado(true);
                alert(`Inicio de sesión exitoso. ¡Bienvenido(a) ${credenciales.nombre.email.password}!`);
                navigate('/home'); // Redirigir a una página adecuada
            } else {
                throw new Error('No se recibió un token');
            }
        } catch (error) {
            alert(error.response?.data?.message || 'Error al Iniciar Sesion, por favor verifique sus credenciales');
        }
    };

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input type="text" name="nombre" placeholder="Nombre" value={credenciales.nombre} onChange={handleChange} required />
                <input type="text" name="email" placeholder="Email" value={credenciales.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={credenciales.password} onChange={handleChange} required />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default InicioSesion;
