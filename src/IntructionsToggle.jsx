import { useState } from "react";

export default function InstructionsToggle(props) {

    const [showInstructions, setShowInstructions] = useState(props.defaultOpen) 
    
    const steps = props.instructions
        .split(',')
        .map(step => step.trim())
        .filter(step => step.length > 0)

    return (
        <>
            <button onClick={() => setShowInstructions(prev => !prev)}>{showInstructions ? "Hide Instructions" : "Show Instructions"}</button>
            {showInstructions && (
                <ul>
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            )}
        </>
    )

}