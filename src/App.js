import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { Routes, Route } from "react-router-dom";
import Developer from "./Components/Developer";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = 'black';
      console.log(mode);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      console.log(mode);
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  return (
    <>

      {/* WITHOUT REACT ROUTER DOM */}
      {/* <NavBar toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm mode={mode} />
      </div> */}

      <NavBar toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert}></Alert>

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm mode={mode}/>} />
          <Route path="/home" element={<TextForm mode={mode}/>} />
          <Route path="/developer" element={<Developer mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
