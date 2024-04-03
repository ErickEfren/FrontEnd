import * as React from "react";
import ElementoTrans from "./components/ElementoTrans";
import { Box, Grid, Text } from "@radix-ui/themes";
import Header from "./components/Header";

export default function PagTransporte() {
  return (
    <div className="flex flex-col items-center pb-14 bg-orange-100">
      <Header />
      <Box align="center"><Text size="7"><br />Resultados Disponibles</Text></Box>
      <Grid rows="5">
      <Box><ElementoTrans/></Box>
      <Box><ElementoTrans /></Box>
      <Box><ElementoTrans /></Box>
      </Grid>
    </div>
  );
}
