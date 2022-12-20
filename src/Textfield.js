import React, {useState} from 'react'


export default function Textfield(props) {
  const [text, setText] = useState('use text hear');
  const handleUpClick =() =>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handlelowClick =() =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const  handleonchange =(event) =>{
    setText(event.target.value);
  }
  return (
    <div>
        <h1>{props.title}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="6"></textarea>
            <div className='pt-3 d-flex justify-content-between'>
              <button className='btn btn-primary p-25' onClick = {handleUpClick}>Conver to Uppercase</button >
              <button className='btn btn-primary p-25' onClick = {handlelowClick}>Conver to Uppercase</button >
            </div>
            
        </div>
    </div>
  )
}
