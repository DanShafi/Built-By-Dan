import React from "react"
import Typical from "react-typical"
import {BrowserRouter as Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import BG from '../media/Plus-Sign-Dark-Mode-BG.svg'

class Hero extends React.Component {
    render() {
        return (
            <div className="container">
                <div style={{height: "450px"}}>                
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
                    A self-taught front end developer and web designer who escaped the 
                    wonderful world of advertising analytics after a five-year(ish) stint. 
                    An aficiando for simple, beautiful UI and the code to match. 
                    There is no smoke and mirrors here - WYSIWYG.
                    </p>
                </div>
            </div>
        ) 
    }
}

export default Hero