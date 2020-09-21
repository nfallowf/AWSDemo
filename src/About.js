import React from 'react'
import './About.css'
function About() {
    return (
        <>
            <div className="about-container">
                <div className="top-section">
                    <h1>Profile</h1>
                    <h3>I'm a Frontend/React developer</h3>
                </div>
                <div className="bottom-section">
                    <div className="section-detail">
                        <h3>About Me</h3>
                        <p>I'm a front end web developer with experience designing and building front end web apps using react</p>
                    </div>
                    <div className="section-detail">
                        <p>Image here</p>
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
