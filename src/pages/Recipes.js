import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Roasted Tomato Soup",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Grilled Sandwich",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Rava Upma",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Chicken Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Tandoori Chicken",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Paldo Korean Buffet",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Grilled Flank Steak",
            image: "/img/gallery/img_9.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Berry Tarts",
            image: "/img/gallery/img_11.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Cucumber Salad",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}