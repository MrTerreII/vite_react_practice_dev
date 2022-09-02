import React from 'react';




export default function Header() {
    function emailReturn() {
        window.open("mailto:/* Your email */");
    }

    function linkedInReturn() {
        window.open("/* Your linkedin */")
    }
    
    function openRef(){
        window.open("https://github.com/MrTerreII");
    }
    
    return (
        <header>
            <img src="/* Your photo, works better with online photo */" />            
            <label>
                <h2 className="header--name">{/* Your name */}</h2>
                <h4 className="header--job">{/* Job or title, like Frontend Dev, Backend Dev, Full-Stack... */}</h4>
                <p className="header--ref" onClick={openRef}>https://github.com/MrTerreII</p>
            </label>
            <div className="header--buttons">
                <button className="email" onClick={emailReturn}><i className="fa-solid fa-envelope"></i><p className="email--text">Email</p></button>
                <button className="linkedin" onClick={linkedInReturn}><i className="fa-brands fa-linkedin"></i><p className="linkedin--text">LinkedIn</p></button>
            </div>
        </header>
    )
}