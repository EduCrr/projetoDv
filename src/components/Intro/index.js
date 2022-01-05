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
          <img src="https://images.unsplash.com/photo-1543224175-3c2a7bee9602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <img
            className="center"
            src="https://images.unsplash.com/photo-1551194201-5b634bd23931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />

          <img src="https://images.unsplash.com/photo-1544380935-17ce6a107313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
        </div>
      </div>
    </IntroArea>
  );
}
