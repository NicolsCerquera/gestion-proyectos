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
  Col,
} from "reactstrap";

function CrearUsuarioForm() {
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
            Crear nuev usuario
          </Button>
        </div>
      </div>

      <Modal isOpen={abierto} style={modalStyles}>
        <ModalHeader>Creacion de nuevo usuario</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Nombre del usuario</Label>
            <Input type="text" id="usuario" />
          </FormGroup>
          <FormGroup>
            <Label for="usuario">Id</Label>
            <Input type="text" id="usuario" />
          </FormGroup>
          <FormGroup>
            <Label for="usuario">Edad</Label>
            <Input type="text" id="usuario" />
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2} className="m-2">
              Asignar proyecto
            </Label>
            <Col sm={10}>
              <Input id="exampleSelect" name="select" type="select">
                <option>proyecto 1</option>
                <option>proyecto 2</option>
                <option>proyecto 3</option>
                <option>proyecto 4</option>
                <option>proyecto 5</option>
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Crear nuevo usuario</Button>
          <Button color="secondary" onClick={abrirModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default CrearUsuarioForm;
