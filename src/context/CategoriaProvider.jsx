import { createContext,useEffect,useState} from "react"

const CategoriasContext= createContext()

function CategoriaProvider({children}) {

    const [category,setCategory]=useState([])
    const [selectCategory,setSelectCategory]=useState("Ordinary Drink")

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
  return (
    <CategoriasContext.Provider
        value={{
            category,
            setSelectCategory,
            selectCategory
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
