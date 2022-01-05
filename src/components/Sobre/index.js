import React from "react";
import { SobreArea } from "./estilo";
import Computer from "@material-ui/icons/Computer";
export default function Sobre() {
  return (
    <SobreArea>
      <div className="container">
        <div className="left-side">
          <img src="https://images.unsplash.com/photo-1600110351781-eef60efcfc3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </div>
        <div className="right-side">
          <h1>Sobre nós</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="infos-area">
            <div className="info">
              <Computer />
              <h5>Resultado</h5>
            </div>
            <div className="info">
              <Computer />
              <h5>Segurança</h5>
            </div>
            <div className="info">
              <Computer />
              <h5>Sigilo</h5>
            </div>
          </div>
        </div>
      </div>
    </SobreArea>
  );
}
