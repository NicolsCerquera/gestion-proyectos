import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function CrearAvtividadesform() {
  const [abierto, setAbierto] = useState(false);
  const abrirModal = () => {
    setAbierto(!abierto);
  };

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <>
      <div className="principal">
        <div className="secundario">
          <Button color="success" onClick={abrirModal}>
            Crear nueva actividad
          </Button>
        </div>
      </div>

      <Modal isOpen={abierto} style={modalStyles}>
        <ModalHeader>Creacion de nueva actividad</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Nombre de la actividad</Label>
            <Input type="text" id="usuario" />
          </FormGroup>
          <FormGroup>
            <Label for="usuario">Descripcion</Label>
            <Input type="textarea" id="usuario" />
          </FormGroup>
          <FormGroup>
            <Label for="usuario">Fecha de inicio</Label>
            <Input type="date" id="usuario" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Fecha de finalizacion</Label>
            <Input type="date" id="password" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Crear de actividad</Button>
          <Button color="secondary" onClick={abrirModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default CrearAvtividadesform;
