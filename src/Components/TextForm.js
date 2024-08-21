import React, { useState } from 'react';

export default function TextForm(props) {
  const [Text, setText] = useState("Enter your text below");
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  const handleToUpper = () => {
    console.log("clicked: " + Text);
    let newText = Text.toLocaleUpperCase();
    setText(newText);
    setHistory([...history, Text]);
    props.showAlert("Coverted to upper case ","success")
  }

  const handleToLower = () => {
    console.log("clicked: " + Text);
    let newText = Text.toLocaleLowerCase();
    setText(newText);
    setHistory([...history, Text]);
    props.showAlert("Coverted to lower case ","success")
  }

  const handleToClear = () => {
    console.log("clicked: " + Text);
    let newText = "";
    setText(newText);
    setHistory([...history, Text]);
    props.showAlert("Text cleared ","success")
  }

  const handleOnChange = (event) => {
    console.log("Handle changed");
    setText(event.target.value);
    setHistory([...history, Text]);

  }

  const handleUndo = () => {
    if (history.length > 0) {
      const previousText = history.pop();
      setText(previousText);
      setHistory(history.slice(0, -1));
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    props.showAlert("Text copied in clipboard ","success")
  }

  const handleRemoveExtraSpaces = () => {
    let newText = Text.replace(/\s+/g, ' ');
    setText(newText);
    setHistory([...history, Text]);
    props.showAlert("Extra spaces removed", "success");
  }

  return (
    <>
      <div className='container my-3' /*style={props.theme}*/>
        <div className="form-group" /*style={props.theme}*/>
          <h2>{props.title}</h2>
          <textarea style={props.theme} className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={handleOnChange} rows="8"></textarea>
          <button type="button" class={`btn btn-${props.theme.type} mt-3 mx-3`} onClick={handleToUpper}>Upper case</button>
          <button type="button" class={`btn btn-${props.theme.type} mt-3 mx-3`} onClick={handleToLower}>lower case</button>
          <button type="button" class={`btn btn-${props.theme.type} mt-3 mx-3`} onClick={handleToClear}>Clear</button>
          <button type="button" class={`btn btn-${props.theme.type} mt-3 mx-3`} onClick={handleUndo}>Undo</button>
          <button type="button" class={`btn btn-${props.theme.type} mt-3 mx-3`} onClick={handleCopy}> {copied ? "Copied!" : "Copy Text"}
          </button>
          <button type="button" class={`btn btn-${props.theme.type} mt-3 mx-3`} onClick={handleRemoveExtraSpaces}>Remove extra spaces</button>
        </div>
      </div>
      <div className='container my-3' style={props.theme}>
        <h2>Summries your text</h2>
        <p>{Text.length} Characters and {Text.trim().split(/\s+/).filter(word => word !== '').length} Words</p>
        <p>{Text.trim().split(/\s+/).filter(word => word !== '').length} Seconds, {Text.trim().split(/\s+/).filter(word => word !== '').length * 0.005} Minuts to read</p>
        <h4>Preview</h4>
        <p>{Text.length > 0 ? Text : "No text to show"}</p>
      </div>
    </>
  )
}