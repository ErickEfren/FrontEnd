import React from 'react'
import { Grid, Text, Box, Container, Button } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import Personas from './Personas';

const Transporte = () => {
    const router = useRouter();

    const Enviar = () => {
        router.push("./PagTransportes")
    }
    const [modalOpen, setModalOpen] = React.useState(false);
    return ( 
        <>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <Button
                    aria-label="Close"
                    className=" close"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    <span aria-hidden={true}>×</span>
                </Button>
                <ModalBody><Personas /></ModalBody>
                <ModalFooter>
                    <Button
                    color="Blue"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                    >
                    Aceptar
                </Button>
                </ModalFooter>
            </Modal>

            <Grid columns="1" rows="3" width="auto">
                <Box />
                <Box align="center"><Text size="8">Consulta de Transporte</Text></Box>
            </Grid>
            <Container style={{ background: 'var(--black-a2)', borderRadius: 'var(--radius-3)' }}>
            <Grid columns="4" rows="6">
                <Box align="center"><Text size="5">Origen</Text></Box>
                <Box align="center"><Text size="5">Destino</Text></Box>
                <Box align="center"><Text size="5">Salida</Text></Box>
                <Box align="center"><Text size="5">Pasajeros</Text></Box>
                <Box align="center"><input type="text" placeholder='Origen'/></Box>
                <Box align="center"><input type="text" placeholder='Destino'/></Box>
                <Box align="center"><input type="datetime-local" placeholder='Salida'/></Box>
                <Box align="center"><Button color="blue" onClick={() => setModalOpen(!modalOpen)}> ¿Cuántos Van?</Button></Box>
                <Box gridColumnStart="4" gridRowStart="4" align="center"><Button onClick={Enviar}>Enviar</Button></Box>
            </Grid>
            </Container>
            <Grid columns="2" rows="1">
                <Box align="center">Mision</Box>
                <Box align="center">Vision</Box>
            </Grid>
            <Grid columns="2" rows="1">
                <Box align="center">Lorem Ipsum</Box>
                <Box align="center">Lorem Ipsum</Box>
            </Grid>
        </>
     );
}
 
export default Transporte;

