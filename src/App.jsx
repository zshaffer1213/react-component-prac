import { useState } from "react";
import recipes from "./recipes";
import RecipeCard from "./RecipeCard";

export default function App() {

  const [searchQ, setSearchQ] = useState('')

  const normalizeSearch = searchQ.toLowerCase()

  const filteredRecipes = recipes.filter((recipe) => {
        const titleMatch = recipe.title.toLowerCase().includes(normalizeSearch)
        const itemMatch = recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(normalizeSearch))
        return titleMatch || itemMatch
  })

  return (
    <>
      <input type="text" value={searchQ} onChange={(e) => setSearchQ(e.target.value)} placeholder="Search Recipes..." />
      {filteredRecipes.length >= 1 && filteredRecipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
      {filteredRecipes.length === 0 && <p>No Matches for your search criteria.</p>}
    </>
  )
}