import { Grid,TextField,MenuItem } from '@mui/material';
import useCategorias from '../hooks/useCategorias';

function Formulario() {
    const {Category,setSelectCategory,Drinks}=useCategorias();
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
                {
                    Drinks?.map(drink=>(
                        <MenuItem
                            key={drink.idDrink}
                            value={drink.strDrink}
                        >
                            {drink.strDrink}
                        </MenuItem>
                    )) 
                }
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
                id="outlined-select-currency"
                select
                label="Categoria de bebida"
                helperText="Elige una categoria de bebida"
                fullWidth
                defaultValue="Ordinary Drink"
                onChange={(e)=>setSelectCategory(e.target.value)}
        >
            
                {
                    Category?.map(categoria=>(
                        <MenuItem
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >
                            {categoria.strCategory}
                        </MenuItem>
                    )) 
                }
            
        </TextField>
      </Grid>
    </Grid>
  );
}

export default Formulario;