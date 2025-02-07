import React from 'react';
import ListaEventos from '../componentes/ListaEventos';

const Eventos = () => {
    return (
        <div>
            <h2>Lista de Eventos</h2>
            <ListaEventos onSubmit={() => window.location.href = '/eventos'} />
        </div>
    );

}

export default Eventos;