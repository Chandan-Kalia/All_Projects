import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">INGREDIENTS:- lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="https://app.samsungfood.com/?utm_source=website&utm_medium=cta&utm_campaign=login">VIEW RECIPE</a>
            </div>
        </div>
    )
}