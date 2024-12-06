import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Свяжитесь с нами:</p>
      <p>
        <a href="https://wa.me/номер_телефона" className="footer-link">
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
        | Телефон: <a href="tel:+79999999999">+7 (999) 999-99-99</a>
      </p>
    </footer>
  );
};

export default Footer;
