import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="row-footer">
        <span>Brasil</span>
        <small>by William Miranda</small>
      </div>
      <div className="row-footer">
        <ul className="bottom-menu">
          <li className="">
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Publicidade</a>
          </li>
          <li>
            <a href="#">Negócios</a>
          </li>
          <li>
            <a href="#">Como funciona a Pesquisa</a>
          </li>
        </ul>
        <span className="text-sm">
          Google Clone Copytright &copy; {new Date().getFullYear()}
        </span>
        <ul className="bottom-menu">
          <li>
            <a href="#">Privacidade</a>
          </li>
          <li>
            <a href="#">Termos</a>
          </li>
          <li>
            <a href="#">Configurações</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
