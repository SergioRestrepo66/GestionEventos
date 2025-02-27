import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../servicios/api';
import { useAuth } from '../autenticacion/autenticacon'; // ✅ Importar el contexto de autenticación

const InicioSesion = () => {
    const { login } = useAuth(); // ✅ Usar el contexto en lugar de una prop (setAutenticado)
    const [credenciales, setCredenciales] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("📤 Enviando:", credenciales); // ✅ Log para depuración

        try {
            const response = await api.post('/login', credenciales);
            console.log("✅ Respuesta del servidor:", response.data); // ✅ Log para ver la respuesta del backend

            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                login({ email: credenciales.email }); // ✅ Usar `login()` del contexto en lugar de `setAutenticado`
                navigate('/'); // ✅ Redirigir a la raíz en lugar de `'/home'`
            } else {
                throw new Error('❌ No se recibió un token');
            }
        } catch (error) {
            console.error("⚠️ Error en el login:", error.response?.data || error.message); // ✅ Depuración de errores en consola
            alert(error.response?.data?.mensaje || 'Error al iniciar sesión, por favor verifique sus credenciales');
        }
    };

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input type="email" name="email" placeholder="Email" value={credenciales.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={credenciales.password} onChange={handleChange} required />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default InicioSesion;
