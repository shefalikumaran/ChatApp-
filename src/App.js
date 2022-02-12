import './App.css';
import TextInput from './TextInput';
import React, { useState } from "react"
import Camera from 'react-snap-pic'
import NamePicker from './NamePicker';


function App() {
  const [showCamera, setShowCamera] = useState(false)
  const [messages, setMessages] = useState([]);

  let [Username, setUsername] = useState ("")

  function sendMessage (msg){
    console.log("MY MESSAGE", msg);
    setMessages([...messages, msg]);
  }
  function takePicture (img) {
    console.log(img)
    setShowCamera(false)    
  }
  console.log(messages);
  return (
    <div className="App"> 
      <header className="header"> 
        <div className="icon"/>
        <span className = "title">WELCOME TO CHATAPP!</span>
        <NamePicker setUsername = {setUsername}/>
      </header> 
      <div className='messages'>
        {messages.map((msg)=> {
          return <div className='message'>{msg}</div>
        })}
      </div>
      <TextInput sendMessage={text=> this.props.onSend(text)} 
      showCamera={()=>setShowCamera(true)}
      />
      {showCamera && <Camera takePicture={takePicture} />}
    </div>
  );
}

export default App; 
