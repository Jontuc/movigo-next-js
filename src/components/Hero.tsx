'use client';
import { Box, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" gutterBottom>
        La nueva forma de moverte
      </Typography>
      <Typography variant="h6" gutterBottom>
        Movigo te acompaña en cada paso con la mejor experiencia y seguridad.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        ¡Comenzar!
      </Button>
    </Box>
  );
}
