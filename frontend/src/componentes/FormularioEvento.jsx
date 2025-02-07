import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import api from '../servicios/api';

const FormularioEvento = ({ evento, onSubmit }) => {
    const [nombre, setNombre] = useState(evento?.nombre || '');
    const [fecha, setFecha] = useState(evento?.fecha || '');
    const [hora, setHora] = useState(evento?.hora || '');
    const [ubicacion, setUbicacion] = useState(evento?.ubicacion || '');
    const [descripcion, setDescripcion] = useState(evento?.descripcion || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { nombre, fecha, hora, ubicacion, descripcion };

        try {
            if (evento) {
                await api.put(`/eventos/${evento._id}`, data);
            } else {
                await api.post('/eventos', data);
            }
            onSubmit();
        } catch (error) {
            console.error("Error al guardar el evento", error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: 'auto', padding: 2 }}>
            <Grid container spacing={2}>
                {/* Nombre del Evento */}
                <Grid item xs={12}>
                    <TextField
                        label="Nombre del Evento"
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Grid>

                {/* Fecha y Hora (en la misma fila) */}
                <Grid item xs={6}>
                    <TextField
                        label="Fecha"
                        type="date"
                        fullWidth
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Hora"
                        type="time"
                        fullWidth
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                {/* Ubicación */}
                <Grid item xs={12}>
                    <TextField
                        label="Ubicación"
                        fullWidth
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                    />
                </Grid>

                {/* Descripción */}
                <Grid item xs={12}>
                    <TextField
                        label="Descripción"
                        fullWidth
                        multiline
                        rows={3}
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Grid>

                {/* Botón de Guardar */}
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button type="submit" variant="contained" color="primary">
                        Guardar Evento
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FormularioEvento;
