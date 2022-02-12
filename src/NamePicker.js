
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

// component declaration
export default function NamePicker(props) {
    // declares state of name and toggles between showing and hiding input
    const [name, SetName] = useState('')
    const [showInput, setShowInput] = useState(false)

    function toggle(){
        setShowInput(!showInput);
    }

    function ok(){
        props.setUsername(name)
        setShowInput(false);

    }

    //if showInput is true, then return the name on the screen 
    if(showInput){
        return <div className="name-picker">
            <input 
                className="name-picker-input"
                onChange={(e) => SetName(e.target.value)}
                value = {name}

            />
            <button className="name-picker-button" onClick = {ok}>OK</button>
        </div>
    }
    // if there is no input: 
    return <div className="name-picker">
        <span className="name-picker-name"> {name || "Set Username: "}</span>
        <FiEdit size = "24" onClick={toggle}/>

    </div>
}