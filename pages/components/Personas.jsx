import { Grid, Box, Button } from '@radix-ui/themes';
import React from 'react'
import Contador from './Contador';

const Personas = () => {
    return ( 
        <>
            <Grid columns="2" rows="4" gapY="1">
                <Box align="center">Completo</Box>
                <Box><Contador /></Box>
                <Box align="center">Inapam</Box>
                <Box><Contador /></Box>
                <Box align="center">Medio</Box>
                <Box><Contador /></Box>
                <Box align="center">Profesor</Box>
                <Box><Contador /></Box>
                
            </Grid>
            
        </>
     );
}
 
export default Personas;