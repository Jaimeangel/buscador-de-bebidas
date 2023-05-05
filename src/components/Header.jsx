import {AppBar,Typography} from '@mui/material';

function Header() {
    return (
        <AppBar
          sx={{
            padding:'20px',
          }}
          position="static"
        >
          <Typography 
            textAlign={'center'}
            variant='h4'
            component={'h1'}
          >
            BUSCADOR DE BEBIDAS
          </Typography>
        </AppBar>
    )
}

export default Header;
