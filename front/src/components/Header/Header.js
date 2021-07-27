import React from "react";
import logo from "img/logo.png";
import { HeaderContainer, Menu } from "./Style";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <Menu>
        <button>Sair</button>
      </Menu>
    </HeaderContainer>
  );
}
