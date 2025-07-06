'use client';
import { Container, Box } from '@mui/material';

import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Hero />
        <Features />
      </Box>
      <Footer />
    </Container>
  );
}
