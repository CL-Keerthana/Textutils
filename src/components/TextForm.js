import React,{useState} from 'react'
export default function TextForm(props) {
const handleUpClick=()=>{
    console.log("Uppercase was Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
}
const handleClearClick=()=>{
    //console.log("Lowercase was Clicked"+text);
    let newText='';
    setText(newText)
    props.showAlert("Text cleared!","success")
   
}
const handleLoClick=()=>{
    //console.log("Lowercase was Clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")
}
const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
   
}
const handleCopyClick=(event)=>{
   
    var text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success")

}
const handleSpace=(event)=>{
let newText=text.split(/[ ]+/);
setText(newText.join(""))
props.showAlert("Removed extra space!","success")

}


const[text,setText]=useState("");
//text="edsjdhdfj"//wrong way to change the state
//setText("new text")//correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#rgb(3 32 55)'}}>
        <h1>{props.heading}</h1> 
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox"  rows="8"></textarea>
    </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Space</button>
    </div> 
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'rgb(3 32 55)'}}>
        <h2>Your text summary</h2>
        <p>{text.split("").length}words and{text.length} Characters</p>
        <p>{0.008*text.split("").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
