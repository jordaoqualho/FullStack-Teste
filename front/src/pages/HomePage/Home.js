import React, { useState, useEffect } from "react";
import Header from "components/Header/Header";
import { Container, Material, MaterialText, Wraper } from "./Style";
import pedra from "img/pedra.jpg";
import axios from "axios";

export const Home = () => {
  const conexao = axios.create({
    baseURL: "http://localhost:8080/",
  });
  const [material, setMaterial] = useState([{}]);
  const [termoDePesquisa, setTermoDePesquisa] = useState("");

  useEffect(() => {
    doGetMaterial(termoDePesquisa);
    console.log(termoDePesquisa);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termoDePesquisa]);

  const doGetMaterial = async (termoDePesquisa) => {
    const response = await conexao.get(`/material/`);
    setMaterial(response.data);
  };

  const materialData =
    material.length === 0 ? (
      <p>Nada encontrado!</p>
    ) : (
      material.map((row, i) => {
        return (
          <Material
            key={i}
            // onClick={() => history.push(`/produto/editar/${row._id}`)}
          >
            <img src={pedra} alt="" />
            <MaterialText>
              <h2>{row.descricao}</h2>
              <p>{row.marca}</p>
            </MaterialText>
          </Material>
        );
      })
    );

  return (
    <>
      <Header setTermoDePesquisa={setTermoDePesquisa}></Header>
      <Wraper>
        <Container>
          {materialData}
          {materialData}
          {materialData}
          {materialData}
        </Container>
      </Wraper>
    </>
  );
};
