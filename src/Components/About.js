// import React, { useState } from 'react'

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor:"black"
  });

  const [btnText,setBtnText] = useState("Enable Dark Mode")
  const [btnStyle,setBtnStyle] = useState({
    color: "white",
    backgroundColor: "black",
  })

  const toggleBtn = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      })
      setBtnText("Enable Dark Mode")
      setBtnStyle({
        color: "black",
        backgroundColor: "white",
      })
    }
    else{
      setMyStyle({
        color: "white",
        backgroundColor: "black"        
      })
      setBtnText("Enable Light Mode")
      setBtnStyle({
        color: "white",
        backgroundColor: "black",
      })
    }
  }

  return (
    <>
      <div className="container">
        <ul className="list-group " >
          <li className="list-group-item" style={props.theme}>An item</li>
          <li className="list-group-item" style={props.theme}>A second item</li>
          <li className="list-group-item" style={props.theme}>A third item</li>
          <li className="list-group-item" style={props.theme}>A fourth item</li>
          <li className="list-group-item" style={props.theme}>And a fifth one</li>
        </ul>
      </div>
      <div className="container">
        <button type="button" onClick={toggleBtn} style={btnStyle} className="btn btn-dark my-3 mx-2">{btnText}</button>
      </div>
    </>
  )
}
