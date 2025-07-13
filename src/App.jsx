import { useState } from "react";
import recipes from "./recipes";
import RecipeCard from "./RecipeCard";

export default function App() {
  return (
    <>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </>
  )
}