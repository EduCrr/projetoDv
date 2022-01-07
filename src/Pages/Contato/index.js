import React from "react";
import { ContatoArea } from "./estilo";
import WhatsApp from "@material-ui/icons/WhatsApp";
import { motion } from "framer-motion";
import InputMask from "react-input-mask";

export default function Contato() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vh",
      scale: 0.8,
    },
  };
  const styleTransition = {
    duration: 0.6,
  };
  return (
    <ContatoArea>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={styleTransition}
        className="photo-side"
      >
        <img
          src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-3.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="icons">
          <WhatsApp />
          <h3>99 99999999</h3>
        </div>
        <div className="icons">
          <WhatsApp />
          <h3>contato@dv.com.br</h3>
        </div>
      </motion.div>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={styleTransition}
        className="form-side"
      >
        <form>
          <input placeholder="Nome" required type="text" />
          <input placeholder="Email" required type="email" />
          <input placeholder="Cidade" required type="text" />
          <InputMask
            mask="(99) 99999-9999"
            placeholder="Telefone"
            type="text"
            name="phone"
          />
          <textarea placeholder="Mensagem" required type="text"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </motion.div>
    </ContatoArea>
  );
}
