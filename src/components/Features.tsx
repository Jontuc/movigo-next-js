'use client';
import { Grid, Box, Typography } from '@mui/material';

const features = [
  { title: 'Fácil', description: 'Reserva en pocos clicks.' },
  { title: 'Seguro', description: 'Viaja con confianza.' },
  { title: 'Económico', description: 'Con tarifas bajas.' },
];

export default function Features() {
  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {features.map((f) => (
          <Grid key={f.title} item xs={12} sm={4}>
            <Typography variant="h5">{f.title}</Typography>
            <Typography>{f.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
