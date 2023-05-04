import { Container,Typography} from "@mui/material"
import Formulario from "./Formulario"

function Main() {
  return (
    <Container 
      maxWidth="lg"
      sx={{
        marginTop:'30px'
      }}
    >
      <Formulario/>
    </Container>
  )
}

export default Main
