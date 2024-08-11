import React from "react" ;
import "../css/contact.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function ContactContent()
{
    const [goToHome , setGoToHome] = useState(false);
    if(goToHome)
    {
        return (<Navigate to = "/home"/>);
    }
    const handleHome = (e) => {
        e.preventDefault();
        return (setGoToHome(true));
    }
    return (
        <>
            <h1 className="sitename"><button className = "button" style = {{cursor : "pointer", padding : "13px"}} onClick = {handleHome} ><i className = "fa-solid fa-arrow-left" ></i></button> B.planet</h1>
            <h1 className = "contactheading">Contact us</h1>
            <div className="grid-container1">
                <div className="i1">
                    <p className="h1">Stay Updated</p>
                    Need to get in touch with us ?
                    <br /><br />
                    <a href = "https://www.facebook.com/" target = "_blank" className="link">Facebook</a>
                    <br />
                    <a href = "https://www.instagram.com/" target = "_blank" className="link">Instagram</a>
                </div>
                <div className="i2">
                    <input type = "text" id = "name" placeholder = "Enter your name" className="ci"/>
                    <br /><br />
                    <input type = "text" id = "email" placeholder = "Enter your mail id" className="ci" />
                    <br /><br />
                    <textarea id ="comment" rows = "3" placeholder="Enter a description" className="ci"></textarea>
                    <br /><br />
                    <button className="submit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default ContactContent;