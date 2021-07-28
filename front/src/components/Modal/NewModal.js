import React, { useEffect, useState } from "react";
import tempAlert from "components/Alert/Alert";
import axios from "axios";
import {
  ModalContainer,
  Modal,
  Input,
  Buttons,
  InputImage,
  Image,
  Select,
} from "./Style";

export default function NewModal(props) {
  const conexao = axios.create({
    baseURL: "http://localhost:8080/",
  });
  const { newModal, setNewModal } = props;
  const [aberto, setAberto] = useState(false);
  const [marca, setMarca] = useState([{}]);
  const [file, setFile] = useState({ file: null });
  const [material, setMaterial] = useState({
    marca: "Portobello",
    ativo: "true",
    dataInativacao: "",
  });

  useEffect(() => {
    if (newModal) {
      handleModal();
      setNewModal(!newModal);
    }
    document.getElementById("descricao").focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newModal]);

  const doGetMarca = async () => {
    const response = await conexao.get(`/marca/`);
    setMarca(response.data);
  };

  const doPostMaterial = async () => {
    const response = await conexao.post(`/material/`, material);
    setMaterial(response.data);
  };

  useEffect(() => {
    doGetMarca();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModal = () => {
    if (aberto) {
      document.getElementById("modal-container").style.display = "none";
    } else {
      document.getElementById("modal-container").style.display = "flex";
    }
    setAberto(!aberto);
  };

  const Marcas = marca.map((row, i) => {
    return (
      <option key={i} value={row.nome}>
        {row.nome}
      </option>
    );
  });

  const handleChangeFile = (event) => {
    setFile({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (material.ativo === "false") {
      // console.log(dataAtualFormatada());
      setMaterial({
        ...material,
        dataInativacao: dataAtualFormatada(),
      });
    }
    doPostMaterial();
    tempAlert("Material Adicionado com sucesso!", 3000);
    // setNewModal(!newModal);
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }
  const handleChange = (event) => {
    const novoMaterial = {
      ...material,
      [event.target.name]: event.target.value,
    };
    setMaterial(novoMaterial);
    console.log(novoMaterial);
  };

  return (
    <ModalContainer id="modal-container">
      <Modal onSubmit={handleSubmit}>
        <h2>Thumb</h2>
        <InputImage type="file" onChange={handleChangeFile} />
        <Image>
          <img src={file.file} alt="" />
        </Image>
        <h2>Descrição</h2>
        <Input
          id="descricao"
          type="text"
          name="descricao"
          onChange={handleChange}
          required
        />
        <h2>Marca</h2>
        <Select
          name="marca"
          onChange={handleChange}
          defaultValue="Portobello"
          required
        >
          {Marcas}
        </Select>
        <h2>Estado do Produto</h2>
        <Select
          name="ativo"
          onChange={handleChange}
          defaultValue="true"
          required
        >
          <option value="true">Disponível</option>
          <option value="false">Indisponível</option>
        </Select>
        <Buttons>
          <button>Confirmar</button>
          <button type="button">
            <a href="/">Cancelar</a>
          </button>
        </Buttons>
      </Modal>
    </ModalContainer>
  );
}
