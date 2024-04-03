import * as React from "react";
import ElementoTrans from "./components/ElementoTrans";
import { Box, Grid } from "@radix-ui/themes";

export default function PagTransporte() {
  return (
    <>
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
