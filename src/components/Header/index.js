import React from "react";
import { HeaderArea } from "./estilo.js";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo" id="home">
          <h1>Logo</h1>
        </div>

        <div className="contato">
          <Link className="more" to="/">
            Home
          </Link>
          <Link className="more" to="/contato">
            Contato
          </Link>
        </div>
      </div>
    </HeaderArea>
  );
}
