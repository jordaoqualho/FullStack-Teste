import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto',sans-serif;
 } 
 button {
   background-color: transparent;
   font-size: 15px;
   font-weight: 400;
   cursor:pointer;
   border: none;
   color: #FFF;
 }
`;

export default GlobalStyle;
