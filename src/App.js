import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'
import About from './Components/About';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a1212';
      showAlert("Congrats!! Dark Mode has been enabled.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Congrats!! Normal Mode has been enabled.", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert} />
      <Routes>
      <Route path="" element={<TextForm mode = {mode} showAlert={showAlert} />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;

