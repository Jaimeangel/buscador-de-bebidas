import { useContext } from "react"
import CategoriasContext from "../context/CategoriaProvider"

function useCategorias() {
    return useContext(CategoriasContext)
}

export default useCategorias;
