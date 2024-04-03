import * as React from "react";
import ElementoTrans from "./components/ElementoTrans";
import { Box, Grid, Text } from "@radix-ui/themes";
import Header from "./components/Header";

export default function PagTransporte() {
  return (
    <div className="flex flex-col items-center pb-14 bg-orange-100">
      <Header />
      <Grid rows="3"><Box/><Box align="center"><Text size="6">Resultados Disponibles</Text></Box><Box/></Grid>
      <Grid rows="5">
      <Box><ElementoTrans/></Box>
      <Box></Box>
      <Box><ElementoTrans /></Box>
      <Box></Box>
      <Box><ElementoTrans /></Box>
      </Grid>
    </div>
  );
}
