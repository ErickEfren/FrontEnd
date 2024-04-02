import React from 'react'
import { Grid, Box, Button } from '@radix-ui/themes';
import { useRouter } from 'next/router';

const ElementoTransporte = () => {
    const router = useRouter();
    
    const VerMas = () =>{
        router.push("./VerMas")
    }

    return ( 
        <>  <Box style={{ background: 'var(--black-a2)', borderRadius: 'var(--radius-3)' }}>
            <Grid columns="4" rows="4" width="90%">
                <Box align="center">Origen</Box>
                <Box align="center">Destino</Box>
                <Box align="center" gridColumnStart="4">Escala</Box>
                <Box align="center" gridColumnStart="4">Emrpesa</Box>
                <Box align="center">Hora de Salida</Box>
                <Box align="center">Hora de Llegada</Box>
                <Box align="center" gridColumnStart="4">Precio</Box>
                <Box align="center" gridColumnStart="4"><Button onClick={VerMas}>Ver Más</Button></Box>
            </Grid>
            </Box>
        </>
     );
}
 
export default ElementoTransporte;