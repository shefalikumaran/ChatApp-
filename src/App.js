import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // makes app class, creates header and puts icon and title inside, creates footer with a text input bar and send button (^) 
    <div className="App"> 
      <header className="header"> 
        <div className="icon"/>
        <span className = "title">WELCOME TO CHATAPP!</span>
      </header>
      <footer className="footer"> 
        <input className="input"/>
        <button className="send">^</button>      
      </footer>
      </div>
  );  
  
}

export default App;
