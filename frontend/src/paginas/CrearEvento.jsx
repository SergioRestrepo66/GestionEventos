import React from 'react';
import FormularioEvento from '../componentes/FormularioEvento';

const CrearEvento = () => {
    return (
        <div>
            <h2>Crear Evento</h2>
            <FormularioEvento onSubmit={() => window.location.href = '/eventos'} />
        </div>

    );
}

export default CrearEvento