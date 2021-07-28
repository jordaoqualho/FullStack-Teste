import React from "react";
import { AdderButton, AdderContainer } from "./Style";

export default function Adder() {
  const handleClick = () => {
    console.log("olá");
  };

  return (
    <AdderContainer>
      <AdderButton onClick={handleClick}>
        <h1>+</h1>
      </AdderButton>
    </AdderContainer>
  );
}
