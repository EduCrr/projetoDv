import React from "react";
import { FooterArea } from "./estilo";
import WhatsApp from "@material-ui/icons/WhatsApp";
//import Facebook from "@material-ui/icons//Facebook";
export default function Footer() {
  let date = new Date();
  return (
    <FooterArea>
      <div className="left-side">
        Detetive Vicencia |{" "}
        <span>Todos os direitos reservados {date.getFullYear()}</span>
      </div>
      <div className="right-side">
        <a
          style={{ color: " #0b0a0b" }}
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5561985702576"
          target="_blank"
        >
          <WhatsApp />
        </a>
      </div>
    </FooterArea>
  );
}
