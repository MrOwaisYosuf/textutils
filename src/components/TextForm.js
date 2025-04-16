import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        newText.length !== 0 ? props.showAlert("Converted to uppercase", "success") : props.showAlert("Please enter text to convert", "warning");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        newText.length !== 0 ? props.showAlert("Converted to lowercase", "success") : props.showAlert("Please enter text to convert", "warning");
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const handleRemoveExtraSpaces = () => {
        setText(text.replaceAll(/\s+/g, ' ').trim());
        text.length !== 0 ? props.showAlert("Removed extra spaces", "success") : props.showAlert("Please enter text to remove spaces", "warning");
    }

    const handleClearText = () => {
        setText('');
        text.length !== 0 ? props.showAlert("Cleared text", "success") : props.showAlert("Please enter text to clear", "warning");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control my-2" placeholder='Enter text here' id="exampleFormControlTextarea1" value={text} onChange={handleOnchange} rows="7"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button disabled={text.split(' ').length === 1} className="btn btn-primary my-2 mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} <span style={{ color: 'grey' }}>words</span> {text.replaceAll(/\s+/g, ' ').trim().length} <span style={{ color: 'grey' }}>characters.</span></p>
                <p>{(0.008 * (text.trim().length === 0 ? 0 : text.trim().split(' ').length)).toFixed(2)} minutes <span style={{ color: 'grey' }}>average read time.</span></p>
            </div>
        </>
    )
}
