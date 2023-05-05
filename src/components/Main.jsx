import { Container} from "@mui/material"

import { CategoriaProvider } from "../context/CategoriaProvider"
import { BebidasProvider } from "../context/BebidasProvider"

import Formulario from "./Formulario"
import ListadoBebidas from "./ListadoBebidas"

function Main() {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <Container 
          maxWidth="lg"
          sx={{
            marginTop:'30px'
          }}
        >
          <Formulario/>
          <ListadoBebidas/>
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default Main
