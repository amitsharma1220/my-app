import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const convertToUpperCase = ()=>{
        try {
            if(text !== ""){
                let upperCaseText = text.toUpperCase();
                setText(upperCaseText);
                props.showAlert("Converted to uppercase!","success");   
            }
            else{
                props.showAlert("Input is empty!","danger");  
            }
        } catch (error) {
            
        }
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        props.showAlert("Converted to uppercase!","success");
    }

    const convertToLowerCase = ()=>{
        let lowercaseText = text.toLowerCase();
        setText(lowercaseText);
        props.showAlert("Converted to lowercase!","success");
    }

    const reverseTextContent = ()=>{
        let lowercaseText = text.split("").reverse().join("");
        setText(lowercaseText);
        props.showAlert("Text Reversed successfully!","success");
    }

    const intoTitleCase = () => {
        let newText = text.trim().split(" ").map((currentValue) => {
            let newText = currentValue[0].trim().toUpperCase() + currentValue.trim().slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Converted to titleCase!","success");
    }

    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!","success");
    }
        
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color : props.mode === 'dark' ? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'dark'? '#282626': 'white', color : props.mode === 'dark' ? 'white':'black' }}></textarea>
                </div>
                <div className="parentContainer">
                    <button className="btn btn-primary mx-3 my-1" onClick={convertToUpperCase}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-3 my-1" onClick={convertToLowerCase}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-3 my-1" onClick={reverseTextContent}>Reverse Text Content </button>
                    <button className="btn btn-primary mx-3 my-1" onClick={intoTitleCase}>Convert to TitleCase </button>
                    <button className="btn btn-primary mx-3 my-1" onClick={copyText}>Copy Text </button>
                    <button className="btn btn-primary mx-3 my-1" onClick={removeExtraSpace}>Remove Extra Space </button>
                </div>
            </div>
            <div className="container my-3"  style= {{color : props.mode === 'dark' ? 'white':'black'}}>
                <h2>Your Text Summary:</h2>
                <p><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters.</p>
                <p>Average time to read your content: <strong>{0.008 * text.split(" ").length} minutes</strong></p>
            </div>
            <div className="container my-3"  style = {{color : props.mode === 'dark' ? 'white':'black'}}>
                <h2>Preview:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
