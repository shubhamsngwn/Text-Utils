import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperCaseClick = () => {
        console.log("UpperCase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCaseClick = () => {
        console.log("LowerCase Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleExtractNumbers = () => {
        const numbersArray = text.match(/\d+/g);
        const numbersString = numbersArray ? numbersArray.join("") : "";
        setText(numbersString);
    }

    const handleRemoveSpecialCharacters = () => {
        const strippedString = text.replace(/[^\w\s]/gi, '');
        setText(strippedString);
    }
    const handleReverseText = () => {
        const reversedString = text.split('').reverse().join('');
        let reversedString2 = '';
        for (let i = text.length - 1; i >= 0; i--) {
            reversedString2 += text[i];
        }
        setText(reversedString2);
        console.log("Text Reversed");
    }

    const handleCopyText = () => {
        console.log("Copy Pressed");
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    const handleExtraSpaces = () => {
        console.log("Trim Extra Spaces Pressed");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleReloadPage = () => {
        console.log("Reload Pressed");
        setText("");
        setTimeout(() => {
            alert("Page Reloaded");
        }, 0.1 * 1000);
    }

    const handleClearText = (() => {
        console.log("Clear Pressed");
        setText("");
    })

    const handleBoldText = () => {
        const txt = document.getElementById('box');
        if (txt.style.fontWeight === 'normal' || txt.style.fontStyle === 'normal' || txt.style.fontStyle === 'italic') {
            txt.style.fontWeight = 'bold';
        } else {
            txt.style.fontWeight = 'normal';
        }
    }

    const handleItalicText = () => {
        const txt = document.getElementById('box');
        if (txt.style.fontWeight === 'normal' || txt.style.fontStyle === 'normal' || txt.style.fontWeight === 'bold') {
            txt.style.fontStyle = 'italic';
        } else {
            txt.style.fontWeight = 'normal';
        }
    }


    // setText = "new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to set the state
    return (
        <>
            <div>
                <div className='container '>
                    <h2 className={`text-${props.mode === "light" ? "dark" : "light"} my-3`}>Try Now: Text Converter - Word and Character Counter & Case Converter:</h2>
                    <h3>Enter text below👇</h3>

                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleBoldText()} >Bold</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleItalicText()}>Italic</button>

                    <div className="my-3">
                        <textarea className={`form-control fnt-fmly my-2 bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"} ${props.mode === "light" ? "border border-dark" : "border border-light"}`} placeholder='Enter text here' value={text} onChange={handleOnChange} id="box" rows="10"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleUpperCaseClick()}>Convert to Upper Case</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleLowerCaseClick()}>Convert to Lower Case</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleCopyText()}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleClearText()}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleExtraSpaces()}>Trim Extra Spaces</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleReloadPage()}>Reload Page</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleExtractNumbers()}>Extract Numbers</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleReverseText()}>Reverse Text</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={() => handleRemoveSpecialCharacters()}>Remove Special Characters</button>
                </div>
                <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
                    <h3 className='my-3'>Your Text Summary</h3>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} <strong>words</strong>, {text.length} <strong>characters</strong>, {(text.match(/[^\w\s]/g) || []).length} <strong>special characters</strong></p>
                    <p><b>Total Time to Read:</b> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes</p>
                    <h2>Preview</h2>
                    <pre>{text === "" ? "Nothing to Preview" : text}</pre>
                </div>
            </div>
        </>
    )
}