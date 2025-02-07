import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormularioEvento from "../componentes/FormularioEvento";
import api from "../servicios/api";

const EditarEvento = () => {
    const { id } = useParams();
    const [evento, setEvento] = useState(null);

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await api.get(`/eventos/${id}`);
                setEvento(response.data);
            } catch (error) {
                console.error("Error al obtener el evento", error);
            }
        };
        fetchEvento();
    }, [id]);

    if (!evento) return <div>Cragrando...</div>

    return (
        <div>
            <h2>Editar Evento</h2>
            <FormularioEvento evento={evento} onSubmit={() => window.localStorage.href = '/eventos'} />
        </div>
    );
}

export default EditarEvento;
