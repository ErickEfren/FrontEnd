import { Box, Grid } from "@radix-ui/themes";
import { useRouter } from "next/router";
import * as React from "react";


export default function ElementoTrans() {
    const router= useRouter()

    const VerMas = () => {
        router.push("./Venta")
    }
  
    return (
    <>
    <div className="flex flex-col py-14 text-3xl text-black bg-yellow-400 rounded-[30px]">
    <Grid rows="3" columns="3">
            <Box align="center">Origen</Box>
            <Box align="center">Destino</Box> 
            <Box align="center">Escala o Directo</Box> 
            <Box align="center">Hora de Salida</Box> 
            <Box align="center">Hora de Hora de Llegada</Box> 
            <Box align="center">Empresa</Box> 
            <Box align="center">Precio</Box> 
            <Box align="center">Cupos</Box> 
            <Box align="center"><button onClick={VerMas}>
                <button className="justify-center py-2.5 pr-16 pl-16 bg-orange-100 border-0 border-black border-solid rounded-[100px] max-md:pr-5 max-md:pl-6">
                    Ver Más
                </button>
            </button></Box> 
    </Grid>
    </div>
    </>
    );
}
