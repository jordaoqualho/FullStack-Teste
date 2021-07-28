import styled from "styled-components";

export const Wraper = styled.div`
  background-color: #212121;
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
`;

export const Container = styled.div`
  background-color: #212121;
  max-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #343a40;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
`;

export const Material = styled.div`
  background-color: #fff;
  border-radius: 20px;
  color: #212121;
  cursor: pointer;
  height: 250px;
  margin: 10px 10px;
  width: 250px;
  img {
    height: 70%;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

export const MaterialText = styled.div`
  padding: 10px 20px;
`;
