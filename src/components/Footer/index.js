import React from "react";
import { FooterArea } from "./estilo";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Facebook from "@material-ui/icons//Facebook";
export default function Footer() {
  let date = new Date();
  return (
    <FooterArea>
      <div className="left-side">
        Detetive |{" "}
        <span>Todos os direitos reservados {date.getFullYear()}</span>
      </div>
      <div className="right-side">
        <WhatsApp />
        <Facebook />
      </div>
    </FooterArea>
  );
}
