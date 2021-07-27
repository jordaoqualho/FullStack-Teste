import React from "react";
import logo from "img/logo.png";
import { HeaderContainer, Menu, Input } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <Input>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Qual material você procura?" />
      </Input>

      <Menu>
        <button>Sair</button>
      </Menu>
    </HeaderContainer>
  );
}
