import { Grid,TextField,MenuItem,Button} from '@mui/material';
import useCategorias from '../hooks/useCategorias';
import useBebidas from '../hooks/useBebidas';
import React from 'react';

function Formulario() {
    const {
        category,
        setSelectCategory,
        selectCategory
    }=useCategorias();

    const {
        setDrink,
        drink,
        SearchBebidas
    }=useBebidas()

    function handleSubmit(){
        if([drink,selectCategory].includes('')){
            alert('Todos los campos obligatorios compadre')
            return
        }
        SearchBebidas()
    }

  return (
    <React.Fragment>
        <Grid container spacing={2} justifyContent={'flex-end'}>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="outlined-select-currency"
                    label="Nombre de bebida"
                    helperText="Ej:Tequila,Vodka,etc"
                    onChange={(e)=>setDrink(e.target.value)}
                    name='nombre'
                    fullWidth
                >
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
                        name='categoria'
                >
                    
                        {
                            category?.map(categoria=>(
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
            <Grid item xs={12} sm={4}>
                <Button
                    variant="contained" 
                    component="button"
                    sx={{
                        width:'100%'
                    }}
                    onClick={()=>handleSubmit()}
                >
                    Buscar bebida
                </Button>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Formulario;