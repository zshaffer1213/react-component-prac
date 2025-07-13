import { useState } from "react";

export default function InstructionsToggle(props) {

    const [showInstructions, setShowInstructions] = useState(props.defaultOpen)    

    return (
        <>
            <button onClick={() => setShowInstructions(prev => !prev)}>{showInstructions ? "Hide Instructions" : "Show Instructions"}</button>
            {showInstructions && <p>{props.instructions}</p>}
        </>
    )

}