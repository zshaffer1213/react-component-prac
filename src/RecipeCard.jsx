import { useState } from "react"
import IngredientsList from "./IngredientsList"
import InstructionsToggle from "./IntructionsToggle"

export default function RecipeCard(props) {

    return ( 
        <>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <IngredientsList ingredients={props.ingredients} />
            <InstructionsToggle instructions={props.instructions} defaultOpen={true}  />
        </>
    )
}


