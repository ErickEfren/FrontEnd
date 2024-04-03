import { Grid, Box } from "@radix-ui/themes";
import * as React from "react";
import Counter from "./CounterElements/Counter";
      
export default function Boleto() {
    const [counts, setCounts] = React.useState({
        completo: 0,
        inapam: 0,
        medio: 0,
        profesor: 0,
      });
      
      const handleMinus = (key) => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          [key]: Math.max(0, prevCounts[key] - 1),
        }));
      };
      
      const handlePlus = (key) => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          [key]: prevCounts[key] + 1,
        }));
      };
  
    return (
        <>
        <div className="px-20 py-12 bg-orange-100 rounded-[30px] max-md:px-5">
        <Grid rows="1" columns="7">
          <Box align="center">
            <div className="flex flex-col my-auto">
              <div>Completo</div>
              <div className="mt-12">INAPAM</div>
              <div className="mt-12">Medio</div>
              <div className="mt-12 max-md:mt-10">Profesor</div>
            </div>
          </Box>
          <Box>
          <Counter
            label="Completo"
            count={counts.completo}
            onMinus={() => handleMinus("completo")}
            onPlus={() => handlePlus("completo")}
          />
          <Counter
            label="INAPAM"
            count={counts.inapam}
            onMinus={() => handleMinus("inapam")}
            onPlus={() => handlePlus("inapam")}
            
          />
          <Counter
            label="Medio"
            count={counts.medio}
            onMinus={() => handleMinus("medio")}
            onPlus={() => handlePlus("medio")}
          />
          <Counter
            label="Profesor"
            count={counts.profesor}
            onMinus={() => handleMinus("profesor")}
            onPlus={() => handlePlus("profesor")}
          />
          </Box>
          <Box gridColumnStart="4" gridColumnEnd="7">
          <div className="flex-auto mt-3 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-3xl text-center text-black max-md:mt-10">
              <div>SUBTOTAL</div>
              <div className="self-stretch mt-6 max-md:mt-10">
                CUOTA DE SERVICIO
              </div>
              <div className="mt-6 max-md:mt-10">TOTAL</div>
            </div>
          </div>
          </div>
          </div>
          </Box>
          <Box gridColumnStart="7" gridColumnEnd="8">
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-3xl text-black whitespace-nowrap max-md:mt-10">
              <div className="text-center">COSTO</div>
              <div className="mt-11 text-center max-md:mt-12">COSTO</div>
              <div className="mt-12 text-center max-md:mt-12">COSTO</div>
              
              </div>
              </div>
            </Box>
            <Box gridColumnStart="5" gridColumnEnd="8">
              <div className="flex flex-col justify-center self-stretch mt-20 bg-orange-100 border border-black border-solid rounded-[100px] max-md:mt-10">
              <button onClick={null} className="justify-center py-5 pr-5 pl-3 bg-yellow-400 border-5 border-black border-solid rounded-[50px] max-md:pr- max-md:pl-0">
                  Comprar
              </button>
              </div>
            </Box>
        </Grid>
     </div>
     </>
  );
}
