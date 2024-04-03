import * as React from "react";
import Info from "./components/Info";
import Boleto from "./components/Boletos";
import Autobus from "./components/Autobus";
import { Grid, Box, Text } from "@radix-ui/themes";
import Header from "./components/Header";

export default function Venta() {

  return (
    <>
      <Header />
      <div className="flex flex-col items-center pb-14 bg-orange-100">
      <Grid rows="1"><Box><Text size="7">Arreglo de viaje</Text></Box></Grid>
      <Grid rows="6" columns="8">
        <Box gridColumnStart="1" gridColumnEnd="7" gridRowStart="1" gridRowEnd="3"><Info /></Box>
        <Box gridColumnStart="1" gridColumnEnd="7" gridRowStart="3" gridRowEnd="7"><Boleto /></Box>
        <Box gridColumnStart="7" gridColumnEnd="9" gridRowStart="2" gridRowEnd="7"><Autobus /></Box>
      </Grid>
      </div>
    </>
  );
}
