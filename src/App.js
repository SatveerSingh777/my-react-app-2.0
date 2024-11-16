// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setThemenStyle] = useState({
    color: "black",
    backgroundColor: "white",
    type: "danger"
  });
  // ----------------------------------------------------------------
  const styleGreen = () => {
    if (theme.backgroundColor !== "green") {
      setThemenStyle({
        color: "white",
        backgroundColor: "green",
        type: "success"
      })
    }
    else {
      setThemenStyle({
        color: "black",
        backgroundColor: "white",
        type: "danger"
      })
    }
  }
  // ----------------------------------------------------------------
  const styleRed = () => {
    if (theme.backgroundColor !== "red") {
      setThemenStyle({
        color: "white",
        backgroundColor: "red",
        type: "danger"
      })

    }
    else {
      setThemenStyle({
        color: "black",
        backgroundColor: "white",
        type: "danger"

      })
    }
  }
  // ----------------------------------------------------------------
  const styleBlue = () => {
    if (theme.backgroundColor !== "blue") {
      setThemenStyle({
        color: "white",
        backgroundColor: "blue",
        type: "primary"
      })

    }
    else {
      setThemenStyle({
        color: "black",
        backgroundColor: "white",
        type: "danger"
      })
    }
  }
  // ----------------------------------------------------------------
  const styleDark = () => {
    if (theme.backgroundColor !== "black") {
      setThemenStyle({
        color: "white",
        backgroundColor: "black",
        type: "dark"
      })

    }
    else {
      setThemenStyle({
        color: "black",
        backgroundColor: "white",
        type: "danger"
      })
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* <BrowserRouter>
            <Navbar styleGreen={styleGreen} styleBlue={styleBlue} styleRed={styleRed} styleDark={styleDark} theme={theme} title="To-Up" />
            <Alert alert={alert} />
        <Routes>
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/" element={<TextForm theme={theme} showAlert={showAlert} title="Write you text" />}/>
        </Routes>
      </BrowserRouter> */}
      <Navbar styleGreen={styleGreen} styleBlue={styleBlue} styleRed={styleRed} styleDark={styleDark} theme={theme} title="TextUtils" />
      <Alert alert={alert} />
      <TextForm theme={theme} showAlert={showAlert} title="Write you text" />
    </>
  );
}

export default App;

