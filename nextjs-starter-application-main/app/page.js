import Image from "next/image";
import ReceipeCard from "./components/RecipeCard";



const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "A flavorful dish with tender chicken in a spicy sauce"
  }
]

export default function Home() {
  return (<div className="container mx-auto px-4">
    <h1 className="text-x1 font-bold text-center my-8 text-[#FFFFFFF]">
      Recipes
    </h1>
    <div className="flex flex-wrap -m-4">
      <ReceipeCard recipe={recipes}/>
      
    </div>
    </div>  );
}