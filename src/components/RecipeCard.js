import CustomImage from "./CustomImage"
import img_1 from "../img/top-chiefs/img_1.jpg"
import img_2 from "../img/top-chiefs/img_2.jpg"
import img_3 from "../img/top-chiefs/img_3.jpg"
import img_4 from "../img/top-chiefs/img_4.jpg"
import img_5 from "../img/top-chiefs/img_5.jpg"
import img_6 from "../img/top-chiefs/img_6.jpg"
import img_7 from "../img/top-chiefs/img_6.jpg"
import img_8 from "../img/top-chiefs/img_7.jpg"
import img_9 from "../img/top-chiefs/img_8.jpg"
import img_10 from "../img/top-chiefs/img_10.jpg"
import img_11 from "../img/top-chiefs/img_11.jpg"
import img_12 from "../img/top-chiefs/img_12.jpg"

const image = [img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10,img_11,img_12]

export default function RecipeCard({recipe}){
const random =  Math.floor(Math.random() * 12);

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.strMealThumb} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={image[random]} alt=""/>
                <p className="recipe-title">{recipe.strMeal}</p>
                <p className="recipe-desc"><b>INGREDIENTS:-</b> {recipe.strIngredient1}, {recipe.strIngredient2}, {recipe.strIngredient3}, {recipe.strIngredient4}, {recipe.strIngredient5} more....</p>
                <a className="view-btn" href={recipe.strSource}>VIEW RECIPE</a> <br/>
                <a className="view-btn" href={recipe.strYoutube}>VIEW TUTORIAL</a>
            </div>
        </div>
    )
}