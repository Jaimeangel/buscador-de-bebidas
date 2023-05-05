import { Container} from "@mui/material"
import { CategoriaProvider } from "../context/CategoriaProvider"
import { BebidasProvider } from "../context/BebidasProvider"
import Formulario from "./Formulario"
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
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default Main
