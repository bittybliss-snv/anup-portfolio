import "../style/Footer.css"

import React from 'react'

import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Ernakulam</p>
                        <p>Kerala</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={25} style={{color: "#fff", marginRight: "2rem" }} />
                    9876543210</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={25} style={{color: "#fff", marginRight: "2rem" }} />
                    anup.sur@gmail.com</h4>
                </div>  
            </div>
            <div className="right">
                <p>2023 &copy; All Rights Reserved</p>
                <div className="social">
                <FaFacebook size={25} style={{color: "#fff", marginRight: "1rem" }} />
                <FaTwitter size={25} style={{color: "#fff", marginRight: "1rem" }} />
                <FaLinkedin size={25} style={{color: "#fff", marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer