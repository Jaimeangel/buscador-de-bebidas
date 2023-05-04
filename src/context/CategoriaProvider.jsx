import { createContext,useEffect,useState} from "react"

const CategoriasContext= createContext()

function CategoriaProvider({children}) {

    const [Category,setCategory]=useState([])
    const [SelectCategory,setSelectCategory]=useState("Ordinary Drink")
    const [Drinks,setDrinks]=useState([])

    useEffect(()=>{
        async function getCategory(){
            try {
                const URL=`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
                const fetchGategory= await fetch(URL)
                const {drinks} = await fetchGategory.json()
                setCategory(drinks)
            } catch (error) {
                throw new Error(error)
            }
        }
        getCategory()
    },[])

    useEffect(()=>{
        async function getCategory(){
            try {
                const URL=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${SelectCategory}`
                const fetchGategory= await fetch(URL)
                const {drinks} = await fetchGategory.json()
                setDrinks(drinks)
            } catch (error) {
                throw new Error(error)
            }
        }
        getCategory()

    },[SelectCategory])
  return (
    <CategoriasContext.Provider
        value={{
            Category,
            setSelectCategory,
            Drinks
        }}
    >
      {children}
    </CategoriasContext.Provider>
  )
}



export {
    CategoriaProvider
}

export default CategoriasContext;
