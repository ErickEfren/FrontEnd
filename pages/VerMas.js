import React from 'react'
import { Grid, Box, Text, Button } from "@radix-ui/themes";
import Personas from "./components/Personas";

export default function Home() {
  return (
    <>
    <Grid columns="6" rows="12" width="auto">
        <Box gridColumnStart="1" gridColumnEnd="3" align="center">Escala1, Escala2, Escala3</Box>
        <Box gridRowStart="2">Hora de Salida</Box>
        <Box gridRowStart="2" gridColumnStart="4">Hora de LLegada</Box>
        <Box gridRowStart="3">Conductor: XXX-YYY-ZZZ</Box>
        <Box gridRowStart="4">Camión Asignado: XXX-YYY-ZZZ</Box>
        <Box gridRowStart="6" gridRowEnd="9" gridColumnStart="1" gridColumnEnd="5"><Personas /></Box>
        <Box gridRowStart="9">SUBTOTAL</Box>
        <Box gridRowStart="9" gridColumnStart="2">$$$</Box>
        <Box gridRowStart="10">COSTO DE SERVICIO</Box>
        <Box gridRowStart="10" gridColumnStart="2">$$$</Box>
        <Box gridRowStart="11">TOTAL</Box>
        <Box gridRowStart="11" gridColumnStart="2">$$$</Box>
        <Box gridColumnStart="5" gridColumnEnd="6" gridRowStart="1" gridRowEnd="12" style={{background: 'var(--black-a2)', borderRadius: 'var(--radius-3)'}}>
            <Grid columns="1" rows="1"><Box align="center"><Text size="8">Autobus</Text></Box></Grid>
            <Grid columns="5" rows="20" height="auto">
                <Box gridColumn="1" gridRow="1"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="1"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="1"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="1"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="3"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="3"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="3"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="3"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="5"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="5"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="5"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="5"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="7"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="7"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="7"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="7"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="9"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="9"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="9"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="9"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="11"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="11"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="11"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="11"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="13"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="13"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="13"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="13"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="15"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="15"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="15"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="15"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="17"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="17"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="17"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="17"><Button>.</Button></Box>
                <Box gridColumn="1" gridRow="19"><Button>.</Button></Box>
                <Box gridColumn="2" gridRow="19"><Button>.</Button></Box>
                <Box gridColumn="4" gridRow="19"><Button>.</Button></Box>
                <Box gridColumn="5" gridRow="19"><Button>.</Button></Box>
            </Grid>
        </Box>
    </Grid>
    </>
  )
}