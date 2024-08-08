import { useEffect, useState } from "react"
import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"


export default function Recipes(){
    const [meals,setmeals] = useState([])
const [loader,setloader]=useState(true)
    const fetchMeals = async()=>{
        let tempMeal = []
        for(let i=0;i<12;i++){
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            const json = await response.json()
            tempMeal.push(json.meals[0])
            
        }
        setmeals(tempMeal)
setloader(false)
    }

    useEffect(()=>{
        fetchMeals()
    },[])

    return (
        <div>
            <PreviousSearches setmeals={setmeals} />
            <div className="recipes-container">

                {loader && <span className="loader"></span>}
            
                { meals.length > 1 && meals.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}