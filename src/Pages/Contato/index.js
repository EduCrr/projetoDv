import React, { useState } from "react";
import { ContatoArea } from "./estilo";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Send from "@material-ui/icons/Send";
import { motion } from "framer-motion";
import InputMask from "react-input-mask";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
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
  function validaEmail() {
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (regex.test(email)) {
      setEmail(email);
    } else {
      setErro("Preencha os campos corretamente!");
    }
  }
  const handleSendEmail = (e) => {
    e.preventDefault();
    setErro("");
    validaEmail();
    if (
      nome.trim() === "service_m4u1xcy" ||
      email.trim() === "" ||
      mensagem.trim() === ""
    ) {
      setErro("Preencha os campos corretamente!");
      return;
    }
    emailjs
      .sendForm(
        "service_m4u1xcy",
        "template_eosqd24",
        e.target,
        "user_Z2SH19kfxdKqqoXKu4i8Q"
      )
      .then(
        (result) => {
          toast.dark("Email enviado com sucesso!");
          setNome("");
          setEmail("");
          setTelefone("");
          setCidade("");
          setMensagem("");
          setErro("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <ContatoArea>
      <ToastContainer autoClose={3000} />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={styleTransition}
        className="photo-side"
      >
        <img src="/assets/contato.jpg" alt="contato" />
        <div className="icons">
          <WhatsApp />
          <a
            style={{ color: " #0b0a0b", textDecoration: "none" }}
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5561985702576"
            target="_blank"
          >
            <h3>(61) 98570-2576</h3>
          </a>
        </div>
        <div className="icons">
          <Send />
          <h3>contato@detetivevicencia.com.br</h3>
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
        <form onSubmit={handleSendEmail}>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
            type="text"
            name="nome"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            type="email"
            name="email"
          />
          <input
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Cidade"
            required
            type="text"
            name="cidade"
          />
          <InputMask
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            mask="(99) 99999-9999"
            placeholder="Telefone"
            type="text"
            name="telefone"
          />
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Mensagem"
            required
            type="text"
            name="mensagem"
          ></textarea>
          <button type="submit">Enviar</button>
          {erro !== "" && <p>{erro}</p>}
        </form>
      </motion.div>
    </ContatoArea>
  );
}
