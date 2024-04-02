import React from 'react'
import { TabNav } from '@radix-ui/themes';

const TabNavIndex = ({active}) => {
    switch(active){
        case "Transporte":
            return(
                <TabNav.Root>
                    <TabNav.Link href="./" active>Transporte</TabNav.Link>
                    <TabNav.Link href="./PagNosotros">Nosotros</TabNav.Link>
                    <TabNav.Link href="">Contacto</TabNav.Link>
                </TabNav.Root>
            );
        case "Nosotros":
            return(
                <TabNav.Root>
                    <TabNav.Link href="./">Transporte</TabNav.Link>
                    <TabNav.Link href="./PagNosotros" active>Nosotros</TabNav.Link>
                    <TabNav.Link href="./PagContacto">Contacto</TabNav.Link>
                </TabNav.Root>
            );
        case "Contacto":
            return(
                <TabNav.Root>
                    <TabNav.Link href="./">Transporte</TabNav.Link>
                    <TabNav.Link href="./PagNosotros">Nosotros</TabNav.Link>
                    <TabNav.Link href="./PagContacto" active>Contacto</TabNav.Link>
                </TabNav.Root>
            );
    }
}
 
export default TabNavIndex;