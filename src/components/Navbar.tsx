'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Movigo</Typography>
        <Box>
          <Button color="primary">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
