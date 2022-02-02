import React, { useState } from "react"
import "./TextInput.css";

function TextInput(props) {
    // are we declaring size to be a propety of text input here? 
    const {sendMessage} = props;
    //why don't you have to define "setText?" function
    const [text, setText] = useState (''); 
    function click() {
        sendMessage(text);
        setText("");
    }
    return (
    <footer className="footer">  
        <input className="input" value={text} onChange={e => setText(e.target.value)}/>
        <button className="send" onClick={click}>^</button>      
      </footer>
    );     
}

export default TextInput;
