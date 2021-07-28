import React, { useEffect, useState } from "react";
import { ModalContainer, Modal, Input, InputImage, Buttons } from "./Style";

export default function NewModal(props) {
  const { newModal, setNewModal } = props;
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (newModal) {
      handleModal();
      setNewModal(!newModal);
    }
    console.log("Modal = " + newModal);
  }, [newModal]);

  const handleModal = () => {
    if (aberto) {
      document.getElementById("modal-container").style.display = "none";
    } else {
      document.getElementById("modal-container").style.display = "flex";
    }
    setAberto(!aberto);
  };

  return (
    <ModalContainer id="modal-container">
      <Modal>
        <h2>Thumb</h2>
        <InputImage type="file" />
        <h2>Descrição</h2>
        <Input type="text" />
        <h2>Marca</h2>
        <Input type="text" />
        <h2>Ativo</h2>
        <Input type="text" />
        <Buttons>
          <button>Confirmar</button>
          <button onClick={handleModal}>Cancelar</button>
        </Buttons>
      </Modal>
    </ModalContainer>
  );
}
