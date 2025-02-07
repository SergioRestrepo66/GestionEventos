import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/global.css';

const BarraNavegacion = ({ onFilter }) => {
    const [filtro, setFiltro] = useState({ fecha: '', ubicacion: '' });

    const handleChange = (e) => {
        setFiltro({ ...filtro, [e.target.name]: e.target.value });
    };

    const handleFiltrar = () => {
        onFilter(filtro);
    };

    return (
        <nav className="navbar">
            <Link to="/">INICIO</Link>
            <Link to="/crear-evento">CREAR EVENTO</Link>
            <Link to="/editar-evento">EDITAR EVENTO</Link>
            <Link to="/eliminar-evento">ELIMINAR EVENTO</Link>
            <Link to="/eventos">LISTAR EVENTOS</Link>

            <div className="filter-container">
                <input
                    type="date"
                    name="fecha"
                    value={filtro.fecha}
                    onChange={handleChange}
                    className="filter-input"
                />
                <input
                    type="text"
                    name="ubicacion"
                    placeholder="Ubicación"
                    value={filtro.ubicacion}
                    onChange={handleChange}
                    className="filter-input"
                />
                <button onClick={handleFiltrar} className="filter-button">
                    Filtrar
                </button>
            </div>
        </nav>
    );
};

export default BarraNavegacion;
