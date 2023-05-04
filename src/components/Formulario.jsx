import { Grid,TextField,MenuItem } from '@mui/material';

function Formulario() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
            id="outlined-select-currency"
            select
            label="Nombre de bebida"
            helperText="Ej:Tequila,Vodka,etc"
            fullWidth
        >
           
           {/*  <MenuItem value='cerveza'>
                cerveza
            </MenuItem> */}
           
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
                id="outlined-select-currency"
                select
                label="Categoria de bebida"
                helperText="Elige una categoria de bebida"
                fullWidth
            >
            
               {/*  <MenuItem value='cerveza'>
                    cerveza
                </MenuItem> */}
            
            </TextField>
      </Grid>
    </Grid>
  );
}

export default Formulario;