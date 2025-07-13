import { useState } from "react";
import recipes from "./recipes";
import RecipeCard from "./RecipeCard";

export default function App() {

  const [searchQ, setSearchQ] = useState('')

  

  return (
    <>
      <input type="text" value={searchQ} onChange={(e) => setSearchQ(e.target.value)} placeholder="Search Recipes..." />
      {recipes.filter((recipe) => {
        const titleMatch = recipe.title.toLowerCase().includes(searchQ.toLowerCase())
        const itemMatch = recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQ.toLowerCase()))
        return titleMatch || itemMatch
      }).map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </>
  )
}