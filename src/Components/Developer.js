import React from 'react';
import image from "./../image.png";

export default function Developer(props) {

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/shubham-sangwan-9ab1a9263", "_blank");
    }

    const handleInstagram = () => {
        window.open("https://www.instagram.com/shubham.sngwn?igsh=MTh6MGFmMmJkemU5", "_blank");
    }

    const handleGit = () => {
        window.open("https://github.com/shubhamsngwn", "_blank");
    }

    return (
        <>
            <div className={`card text-center bg-${props.mode === "light" ? "light" : "dark"}`}>
                <div className="card-body">
                    <img className='my-3' src={image} style={{ maxWidth: '100%', height: 'auto', '@media (max-width: 600px)': { maxWidth: '50%', height: 'auto' }, width: "auto", height: "400px", borderRadius: "15px" }} alt="" />
                    <h5 className={`card-title my-3 ${props.mode === 'light' ? "textlight" : "textdark"}`}>Shubham Sangwan</h5>
                    <a href="#"><i onClick={handleLinkedIn} className={`fa-brands fa-linkedin-in ${props.mode === 'light' ? "iconlight" : "icondark"}`}></i><i onClick={handleGit} className={`fa-brands fa-github ${props.mode === 'light' ? "iconlight" : "icondark"}`}></i><i onClick={handleInstagram} className={`fa-brands fa-instagram ${props.mode === 'light' ? "iconlight" : "icondark"}`}></i ></a>
                </div>
            </div>
        </>
    )
}
