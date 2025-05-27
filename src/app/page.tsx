'use client';

import { Container, Typography, Button, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a Movigo
        </Typography>

        <Typography variant="body1" gutterBottom>
          Esta es una aplicación construida con Next.js y Material UI.
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Empezar
        </Button>
      </Box>
    </Container>
  );
}
