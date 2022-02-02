import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import React, { useState } from "react"


function App() {
  //why are we defining sendMessage here and not in TextInput 
  const [messages, setMessages] = useState("");
  function sendMessage (msg){
    console.log("MY MESSAGE", msg);
    setMessages([...messages, msg]);
  }
  console.log(messages);
  return (
    // makes app class, creates header and puts icon and title inside, creates footer with a text input bar and send button (^) 
    <div className="App"> 
      <header className="header"> 
        <div className="icon"/>
        <span className = "title">WELCOME TO CHATAPP!</span>
      </header>
      <div className='messages'>
        {messages.map((msg)=> {
          return <div className='message'>{msg}</div>
        })}
      </div>
      <TextInput sendMessage ={sendMessage}/>
    </div>
  );  
}

export default App; 
