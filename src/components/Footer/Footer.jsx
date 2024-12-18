import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Свяжитесь с нами:</p>
      <p>
        <a href="https://wa.me/+996555455551" className="footer-link">
          WhatsApp
        </a>{" "}
        |{" "}
        <a
          href="https://instagram.com/ваш_аккаунт"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Instagram
        </a>{" "}
        | Телефон: <a href="tel:+996 555 455 551">+996 (555)455 551</a>
      </p>
    </footer>
  );
};

export default Footer;
