import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Thank you for visiting! 🌟")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Feel free to connect with me on ")}
          <a href="https://www.linkedin.com/in/shrayansh1/" target="_blank" rel="noopener noreferrer">LinkedIn 🔗</a>{" | "}
          <a href="https://github.com/Shrayansh19" target="_blank" rel="noopener noreferrer">GitHub 🐙</a>{" | "}
          <a href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">GMail ✉️</a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2024 Shrayansh Jakar | Made with ❤️")}
        </p>
      </div>
    </Fade>
  );
}

