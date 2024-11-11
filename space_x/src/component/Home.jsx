import React from "react";
import "../index.css"; // Make sure to import the CSS for styles
import './ScrollArrow';
import ScrollArrow from "./ScrollArrow";
const Home = () => {
    return (
        <div className="header-section">
            <div className="background-video-container">
                <video autoPlay loop muted className="background-video">
                    <source src="../public/sec-a.mp4" type="video/mp4" /> 
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="Navbar">
                <img className="logo" src="/logo.png" alt="logo" />
                <div className="menu">
                    <p className="menu-item">Falcon 9</p>
                    <p className="menu-item">Falcon Heavy</p>
                    <p className="menu-item">Dragon</p>
                    <p className="menu-item">Starship</p>
                    <p className="menu-item">Human Spaceflight</p>
                    <p className="menu-item">Rideshare</p>
                    <p className="menu-item">Starshield</p>
                    <p className="menu-item">Starlink</p>
                    <p className="link">Shop</p>
                </div>
            </div>
            <div className="sec">
                <h3>Recent launch</h3>
                <h1>Starship's fifth<br /> flight test</h1>
                <div className="btn">
                    <span>Rewatch</span>
                </div>
            </div>
            <ScrollArrow/>
        </div>
    );
};

export default Home;
