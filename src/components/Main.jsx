import { Container} from "@mui/material"
import { CategoriaProvider } from "../context/CategoriaProvider"
import Formulario from "./Formulario"
function Main() {
  return (
    <CategoriaProvider>
      <Container 
        maxWidth="lg"
        sx={{
          marginTop:'30px'
        }}
      >
        <Formulario/>
      </Container>
    </CategoriaProvider>
  )
}

export default Main
