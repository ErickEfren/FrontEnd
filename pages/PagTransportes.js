import ElementoTransporte from "./components/ElementoTrans";
import TabNavIndex from "./components/TabNavIndex";
import { Grid, Box} from "@radix-ui/themes";

export default function PagNosotros() {
  return (
    <>
    <TabNavIndex active="Transporte" />
    <Grid columns="1" rows="7">
        <Box><ElementoTransporte /></Box>
        <Box></Box>
        <Box><ElementoTransporte /></Box>
        <Box></Box>
        <Box><ElementoTransporte /></Box>
        <Box></Box>
        <Box><ElementoTransporte /></Box>

    </Grid>
    </>
  )
}
