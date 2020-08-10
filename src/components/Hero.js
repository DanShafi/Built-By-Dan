import React from "react"
import Typical from "react-typical"

class Hero extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="divHeight">                
                    <Typical 
                    className ="dark-hero-text"
                    wrapper="h1"
                    steps={["Frontend developer and web designer "]}
                />
                </div>  
                <div className ="hr-line" />

                <div className="row sub-text">
                    <h5 style={{fontWeight: 600}} className="col-lg-6">Hi, i'm Dan (short for Danish, pronounced \ ˈdan-ish)</h5>
                    <div className="w-100"/>
                    <p className="col-lg-6">
                    An independent front end developer and web designer who
                    changed career from advertising to tech, with a core focus 
                    on JavaScript and React.js.
                    An aficiando for simple, beautiful UI and the code to match.
                    <br /><br />
                    <p className="text-muted">
                        This site is currently in beta mode - v.1.0
                    </p>
                    </p>
                </div>
                <p>+++++++++++++++++++++++++++++++</p>
            </div>
        ) 
    }
}

export default Hero