import React from "react";
import { ContatoArea } from "./estilo";
import WhatsApp from "@material-ui/icons/WhatsApp";
export default function Contato() {
  return (
    <ContatoArea>
      <div className="photo-side">
        <h1>Area de contato</h1>
        <img
          src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-3.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="icons">
          <WhatsApp />
          <h3>99 999934234</h3>
        </div>
        <div className="icons">
          <WhatsApp />
          <h3>contato@dv.com.br</h3>
        </div>
      </div>
      <div className="form-side">
        <form>
          <input placeholder="Nome" required type="text" />
          <input placeholder="Email" required type="email" />
          <input placeholder="Cidade" required type="text" />
          <input placeholder="Telefone" />
          <textarea placeholder="Mensagem" required type="text"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </ContatoArea>
  );
}
