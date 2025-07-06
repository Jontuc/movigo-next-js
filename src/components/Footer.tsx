'use client';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Movigo. Todos los derechos reservados.
      </Typography>
      <Typography>
        <Link href="https://twitter.com" target="_blank">
          Twitter
        </Link>{' '}
        ·
        <Link href="https://facebook.com" target="_blank">
          Facebook
        </Link>
      </Typography>
    </Box>
  );
}
