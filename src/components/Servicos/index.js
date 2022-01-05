import React from "react";
import { ServicosArea, ListaServicos } from "./estilo";
import { useState } from "react";
export default function Servicos() {
  const [works, setWorks] = useState([
    {
      title: "teste",
      photo:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      reverse: true,
    },
    {
      title: "teste",
      photo:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      reverse: false,
    },
    {
      title: "teste",
      photo:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      reverse: true,
    },
    {
      title: "teste",
      photo:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      reverse: false,
    },
  ]);

  return (
    <ServicosArea>
      <div className="servicos">
        <div className="left-side">
          <h1>Serviços</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="right-side">
          {works.map((item, k) => (
            <ListaServicos key={k} change={item.reverse}>
              <div className="text">
                <h3>{item.title}</h3>
              </div>
              <div className="photo">
                <img src={item.photo} alt={item.title} />
              </div>
            </ListaServicos>
          ))}
        </div>
      </div>
    </ServicosArea>
  );
}
