import React from "react";
import { HeaderArea } from "./estilo.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Header() {
  let location = useLocation();
  const splitLocation = location.pathname.split("/");
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo" id="home">
          <h1>Logo</h1>
        </div>

        <div className="contato">
          <Link className={splitLocation[1] === "" ? "active" : "more"} to="/">
            Home
          </Link>
          <Link
            className={splitLocation[1] === "contato" ? "active" : "more"}
            to="/contato"
          >
            Contato
          </Link>
        </div>
      </div>
    </HeaderArea>
  );
}
