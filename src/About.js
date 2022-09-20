import React from "react";
import './About.css'
class About extends React.Component{
    render(){
        return(
            <div className="about">
                <h2>About Me</h2>
                <div className="border"></div>
                <p>I am a student studying Computer Science and Engineering from Jyothy Institute of Technology. I aspire to become a full stack web developer and build large number of useful web applications.</p>
                <div className="details">
                    <ul>
                        <li>CGPA : 8</li>
                        <li>Full Stack Web Developer</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About;