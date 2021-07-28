import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  display: none;
  background-color: rgba(13, 17, 17, 0.05);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(3px);
  height: calc(100vh - 60px);
`;

export const Modal = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 70%;
  position: absolute;
  border-radius: 20px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: #212121;
  h2 {
    color: white;
    font-size: 16px;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px 0 30px 0;
`;

export const InputImage = styled(Input)`
  height: 100px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 50px;
  cursor: pointer;
  button {
    background-color: white;
    color: black;
    font-weight: 700;
    padding: 10px 30px;
    border-radius: 5px;
    margin-right: 30px;
    :hover {
      color: #fff;
      background-color: #495057;
    }
  }
`;
