// Code Keypad Component Here
import React from "react"
function Keypad (){
    const handleChange = () =>{
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={e => handleChange(e)} />
        </div>
    )
}

export default Keypad;