import React from "react";
import {Route,NavLink,Link,HashRouter,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab,faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub);

class Main extends React.Component{
    render(){
        return(
            <HashRouter>
            <div>
            <div>
                <Link className="logo" to="/">Samartha Prabhhu A</Link>
            </div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path = "/About" element={<About />}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;