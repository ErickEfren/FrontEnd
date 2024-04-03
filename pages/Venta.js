import * as React from "react";
import Info from "./components/Info";
import { Grid, Box, Text } from "@radix-ui/themes";
import Header from "./components/Header";
import Persona from "./components/Personas";
import { useRouter } from "next/router";

export default function Venta() {

  const router = useRouter();

  const Continuar = () =>{
    router.push("./PagCarrito")
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center pb-0 bg-orange-100">
      <Grid ><br />
        <Box align="center"><Info /><br /></Box>
        <Box align="center"><Persona /></Box>
        <Box align="center"><button onClick={Continuar} className="justify-center py-2.5 pr-16 pl-16 bg-yellow-400 border-0 border-black border-solid rounded-[100px] max-md:pr-5 max-md:pl-6">
                    Continuar
            </button></Box>
      </Grid>
      </div>
    </>
  );
}
