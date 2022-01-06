import React from "react";
import { IntroArea } from "./estlio";
export default function Intro() {
  return (
    <IntroArea>
      <div className="container">
        <div className="left-side">
          <h1>Serviços </h1>
          <h1>Investigativos</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <a className="more">Saiba mais</a>
        </div>
        <div className="right-side">
          <div class="mask"></div>
        </div>
      </div>
    </IntroArea>
  );
}
