import { Grid } from "@mui/material";
import useBebidas from "../hooks/useBebidas";
import Bebida from "./Bebida";

function ListadoBebidas() {
    const {bebidas}=useBebidas()
  return (
    <Grid 
        container 
        spacing={2} 
        justifyContent={'flex-start'}
        marginTop={5}
        marginBottom={5}
    >
        {
            bebidas.map(bebida=>(
                <Bebida
                    key={bebida.idDrink}
                    bebida={bebida}
                />
            ))
        }
    </Grid>
  )
}

export default ListadoBebidas;
