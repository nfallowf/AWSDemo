import React from 'react'
import './About.css'
function About() {
    return (
        <>
            <div className="about-container">
                <div id="about-title">
                    <h1>Profile</h1>
                    <h4>I'm a Fullstack Web Developer</h4>
                </div>
                <div className="bottom-section">
                    <div className="section-detail">
                        <h3>About Me</h3>
                        <p>I'm a front end web developer with experience designing and building front end web apps using react</p>
                    </div>
                    <div className="section-detail">
                        <div id="selfie-container">
                            <img id="selfie" src='/resumeselfie.jpg'/>
                        </div>
                    </div>
                    <div className="section-detail">
                        <h3>Details</h3>
                        <p><b>Name:</b><br/>Nathan Fallowfield</p>
                        <p><b>Age:</b><br/>23 Years</p>
                        <p><b>Location:</b><br/>St. Thomas, Ontario, Canada</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
