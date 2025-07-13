export default function IngredientsList(props) {

    return (
        <ul>
            {props.ingredients.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    )

}