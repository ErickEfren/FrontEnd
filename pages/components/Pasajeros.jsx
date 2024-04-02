import React from "react";
import Personas from "./Personas";
import { Grid } from "@radix-ui/themes";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button color="blue" onClick={() => setModalOpen(!modalOpen)}>
        Launch demo modal
      </Button>
      <Grid>
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
            </button>
          <ModalBody><Personas /></ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              type="button"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      </Grid>
    </>
  );
}

export default Example;