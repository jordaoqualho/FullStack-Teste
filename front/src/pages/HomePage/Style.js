import styled from "styled-components";

export const Container = styled.div`
  background-color: #343a40;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: auto;
`;

export const Material = styled.div`
  background-color: #fff;
  border-radius: 10px;
  color: #212121;
  height: 250px;
  margin: 15px;
  width: 250px;
  img {
    height: 70%;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;
