import React from 'react';


export default function Footer(){
    function onMyClick(type){
        switch(type){
            case 'twitter':
                window.open("/* Your twitter */");
                break;
            case 'facebook':
                window.open("/* Your facebook */");
                break;
            case 'instagram':
                window.open("/* Your instagram */");
                break;
            case 'github':
                window.open("https://github.com/MrTerreII");
        }
    }
    
    return (
        <footer>
            <i className="fa-brands fa-square-twitter fa-2x" onClick={() => onMyClick("twitter")}></i>
            <i className="fa-brands fa-square-facebook fa-2x" onClick={() => onMyClick("facebook")}></i>
            <i className="fa-brands fa-square-instagram fa-2x" onClick={() => onMyClick("instagram")}></i>
            <i className="fa-brands fa-square-github fa-2x" onClick={() => onMyClick("github")}></i>
        </footer>
    )
}