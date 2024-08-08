import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function PreviousSearches({setmeals}){
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 
    const [letter,setletter] = useState("")
    const getMeals = async()=>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        const res2 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)

        const json =await res.json()
        const json2 = await res2.json()

        const tempMeals = []
        for(let i =0;i<json.meals.length; i++){
            console.log(json.meals[i]);
            
            tempMeals.push(json.meals[i])
            console.log(tempMeals);
            
        }
        for(let i =0;i<json2.meals.length; i++){

            tempMeals.push(json2.meals[i])
        }
        setmeals([])
        setmeals(tempMeals)
        console.log(tempMeals);
        
    }

    return (
        <div className="previous-searches section">
            <h2>Popular Searches</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." onChange={(e)=>{
                    setletter(e.target.value[0])
                }} />
                <button onClick={getMeals} className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}