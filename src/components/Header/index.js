import React from "react";
import { HeaderArea } from "./estilo.js";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Serviços</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="contato">
          <Link className="more" to="/contato">
            Contato
          </Link>
        </div>
      </div>
    </HeaderArea>
  );
}
