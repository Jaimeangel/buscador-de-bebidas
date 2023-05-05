import { createContext,useState} from "react"
import useCategorias from "../hooks/useCategorias"

const BebidasContext=createContext()

function BebidasProvider({children}) {

    const {SelectCategory}=useCategorias()
    const [drink,setDrink]=useState("")
    const [bebidas,setBebidas]=useState([])

    async function SearchBebidas(){
        try {
            const URL=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}&c=${SelectCategory}`
            const fetchGategory= await fetch(URL)
            const {drinks} = await fetchGategory.json()
            setBebidas(drinks)
        } catch (error) {
            throw new Error(error)
        }
    }
  return (
    <BebidasContext.Provider
        value={{
            setDrink,
            SearchBebidas,
            drink,
            bebidas
        }}
    >
        {children}
    </BebidasContext.Provider>
  )
}

export {
    BebidasProvider
}

export default BebidasContext;
