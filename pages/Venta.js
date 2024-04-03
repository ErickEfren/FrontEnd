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
      <Grid >
        <Box align="center"><Autobus /></Box>
        <Box align="center"><Info /><br /></Box>
        <Box align="center"><Boleto /></Box>
      </Grid>
      </div>
    </>
  );
}
