import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends React.Component{
    render(){
        return(
            <div>
                <h2>Contact me</h2>
                <p>This is my contact. Got questions?</p>
                <p style={{marginBottom : "4rem"}}>You can email me @samarthaprabhhume@gmail.com.</p>
                
                <a href="https://twitter.com/" style={{
                    textShadow : "0 1px 0 rgba(0,0,0,0.1)",
                    margin : "0rem 2rem 0rem 0.5rem",
                    textDecoration : "none",
                    color : "white"
                }}><FontAwesomeIcon icon={["fab","twitter"]} size="2x"/></a>

                <a href="https://www.linkedin.com/in/samartha-prabhhu-127a93184" style={{
                    textShadow : "0 1px 0 rgba(0,0,0,0.1)",
                    margin : "0rem 2rem 0rem 0.5rem",
                    textDecoration : "none",
                    color : "white"
                }}><FontAwesomeIcon icon={["fab","linkedin"]} size="2x"/></a>

                <a href="https://www.facebook.com/" style={{
                    textShadow : "0 1px 0 rgba(0,0,0,0.1)",
                    margin : "0rem 2rem 0rem 0.5rem",
                    textDecoration : "none",
                    color : "white"
                }}><FontAwesomeIcon icon={["fab","facebook"]} size="2x"/></a>


                <a href="https://github.com/Samartha08" style={{
                    textShadow : "0 1px 0 rgba(0,0,0,0.1)",
                    margin : "0rem 2rem 0rem 0.5rem",
                    textDecoration : "none",
                    color : "white"
                }}><FontAwesomeIcon icon={["fab","github"]} size="2x"/></a>
                
            </div>
        )
    }
}

export default Contact;