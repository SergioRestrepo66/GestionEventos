import React, { useEffect, useState } from 'react';
import { Grid2, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../servicios/api';

const ListaEventos = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await api.get('/eventos');
                setEventos(response.data);
            } catch (error) {
                console.error("Error fetching events", error);
            }
        };
        fetchEventos();
    }, []);

    return (
        <Grid2 container spacing={3}>
            {eventos.map((evento) => (
                <Grid2 item xs={12} sm={6} md={4} key={evento._id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{evento.nombre}</Typography>
                            <Typography variant="body2">{evento.descripcion}</Typography>
                            <Button component={Link} to={`/editar-evento/${evento._id}`}>Editar</Button>
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    );
}

export default ListaEventos;
