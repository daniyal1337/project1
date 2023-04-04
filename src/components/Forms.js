import React, {useState} from 'react'

export default function Forms(props) {
    const upclick= ()=>{
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const loclick= ()=>{
        let nowtext=text.toLowerCase();
        setText(nowtext);
    }
    const del=()=>{
      let nowtext=' ';
      setText(nowtext);
  }
  const copy=()=>{
    var text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
const remove=()=>{
  let nowtext=text.split(/[ ]+/);
      setText(nowtext.join(" "));
}
    
    
    const handle =(event)=>{
        setText(event.target.value);
    }
const [text,setText]= useState('');
  return (
    <>
   <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handle} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="mybox" rows={8} defaultValue={""} />
  </div>
  <button className='btn btn-primary' onClick={upclick}>UPPERCASE</button>
  <button className='btn btn-primary mx-4' onClick={loclick}>LOWERCASE</button>
  <button className='btn btn-primary mx-2' onClick={del}>Delete</button>
  <button className='btn btn-primary mx-2' onClick={copy}>Copy text</button> 
  <button className='btn btn-primary mx-2' onClick={remove}>Remove space</button> 
</div>
<div className='container my-4 'style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>It will {0.008 * text.split(" ").length}minutes to read</p>
    <h3>Preview</h3>
    <p>{text}</p>

</div>
</>
  )
}
