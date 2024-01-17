import { Link } from "react-router-dom";
import "./css/About.css";
import About1 from "../assets/react1.webp"
import About2 from "../assets/react2.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a react front-end developer. I create responsive secure Website for my clients.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={About1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={About2} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
