import React, { useState } from 'react'

export default function Pro(props) {
    // const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // function to convert text into uppercase 
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    // to convert text into lowercase
    const handleloClick = () => {
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    // function is used to clear inteired text
    const handleClear = () => {
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
    }
    // function used to handle change to happen
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    // function use to copy all text
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    // extra space remover function 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    
    return (
        <>
            <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
                <div className="mb-3">
                    <h1>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text here:</label>
                    </h1>
                    <textarea style={{background:props.mode==='dark'? '#09477df2':'white', color:props.mode==='light'?'black':'white'}} className='form-Control' value={text} onChange={handleOnChange} id='mybox' rows='8' cols='150'></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-1">UPPERCASE</button>
                <button onClick={handleloClick} className="btn btn-primary mx-1">lowercase</button>
                <button onClick={handleClear} className="btn btn-primary mx-1">Clear</button>
                <button onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
                <button onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove extra space</button>
            </div>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>

                <h2>Text Preview:</h2>
                <p>Thier is {text.length} Charter and {text.split(' ').length} words</p>
                <h2>Preview:</h2>
                <p>{text}</p>
            </div>



        </>

    )
}


