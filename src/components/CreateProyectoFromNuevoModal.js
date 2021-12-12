import {
  Modal,
  Form,
  Button,
  FormText,
  Alert,
  ModalTitle,
} from "react-bootstrap";

import React from "react";

function CreateProyectoFromNuevoModal({ open, close }) {
  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Modal de prueba</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form action="/projects">
          <Form.Group className="mb-3">
            <Form.Label>Nombre del proyecto:</Form.Label>
            <Form.Control
              className="mb-3"
              placeholder="Escribe el nombre"
              size="sm"
            />
            <Form.Label>Descripción del proyecto:</Form.Label>
            <Form.Control
              className="mb-3"
              size="sm"
              as="textarea"
              rows={3}
              placeholder="Escribe una descripcion del proyecto"
            />
            <Form.Label>Categoria:</Form.Label>
            <Form.Control
              className="mb-3"
              size="sm"
              placeholder="Escribe la categoria"
            />
            <Form.Label>Fecha de inicio:</Form.Label>
            <Form.Control
              placeholder="Escribe la fecha de inicio del proyecto"
              className="mb-3"
              size="sm"
            />
            <Form.Label>Fecha de finalizacion:</Form.Label>
            <Form.Control
              placeholder="Escribe la fecha final del proyecto"
              className="mb-3"
              size="sm"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button variant="danger" onClick={close}>
          Cancelar
        </Button>
        <Button variant="success">Crear nuevo proyecto</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateProyectoFromNuevoModal;
