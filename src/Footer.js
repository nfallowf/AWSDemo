//Author Nathan Fallowfield
import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <>
            <div className='footer-container bg-dark'>
              <div id="footer-title">
                  <h1>Contact Me</h1>
                  <p>“Every mind needs friendly
                  contact with other minds, for
                  food of expansion and growth.”
                  — Napoleon Hill
                  </p>
              </div>
              <div id='footer-contacts-container'>
                <ul id='contactlist'>
                  <li>nate@natefallowfield.com</li>
                  <li>Facebook</li>
                  <li>Linkedin</li>
                </ul>
              </div>
            </div>
        </>
    )
}

export default Footer
