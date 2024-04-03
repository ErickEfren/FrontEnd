import * as React from "react";
import Info from "./components/Info";
import Boleto from "./components/Boletos";
import Autobus from "./components/Autobus";
import { Grid, Box } from "@radix-ui/themes";

export default function Venta() {

  return (
    <>
      <Grid rows="6" columns="8">
        <Box gridColumnStart="1" gridColumnEnd="7" gridRowStart="1" gridRowEnd="3"><Info /></Box>
        <Box gridColumnStart="7" gridColumnEnd="9" gridRowStart="1" gridRowEnd="7"><Autobus /></Box>
        <Box gridColumnStart="1" gridColumnEnd="7" gridRowStart="3" gridRowEnd="7"><Boleto /></Box>
      </Grid>
    </>
  );
}
