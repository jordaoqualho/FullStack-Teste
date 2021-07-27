import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #343a40;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 70px;
  justify-content: space-between;
`;

export const Input = styled.div`
  position: relative;
  svg {
    color: #495057;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
  }
  input {
    background-color: #fff;
    border-radius: 15px;
    border: none;
    padding: 9px 50px;
    color: #495057;

    ::placeholder {
      color: #495057;
      opacity: 0.5;
    }
  }
`;

export const Menu = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  button {
    background-color: #495057;
    transition: 0.3s ease;
    padding: 10px 30px;
    text-transform: uppercase;
    :hover {
      background-color: #fff;
      color: #495057;
    }
  }
`;

// export const NavLogo = styled(Link)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
// `;
