import React from "react"

const Home = () => {
    return (
        <div className="container p-0">
            <div>
                <h1 className="event dark-hero-text">Frontend developer and web designer.</h1>
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

export default Home