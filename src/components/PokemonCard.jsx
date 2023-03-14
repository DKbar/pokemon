import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const PokemonCard = (props) => {
    const { name, sprites } = props;

    return <Grid item xs={2} sm={4} md={2.4}>
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia component="img" height="250" image={sprites.front_default} alt="name" />
            <CardContent>
                <Typography variant="h5" component="div">
                    <Link to={name} style={{ textDecoration: "none" }}>{name}</Link>
                </Typography>
            </CardContent>
        </Card>
    </Grid>;
}
