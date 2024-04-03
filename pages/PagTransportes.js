import * as React from "react";
import ElementoTrans from "./components/ElementoTrans";
import { Box, Grid } from "@radix-ui/themes";
import Header from "./components/Header";

export default function PagTransporte() {
  return (
    <>
      <Header />

      Resultados Disponibles
      <Grid rows="5">
      <Box><ElementoTrans/></Box>
      <Box></Box>
      <Box><ElementoTrans /></Box>
      <Box></Box>
      <Box><ElementoTrans /></Box>
      </Grid>
    </>
  );
}
