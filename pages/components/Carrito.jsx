import React from "react";
import { Grid, Box } from "@radix-ui/themes";
import axios from "axios";

export default function Carrito() {
  const handleBuy = async (e) => {
      const data = await axios.post("/api/create_checkout_session");
      window.location.href = data.data.url;
  };
  return (
    <>
      <Grid columns="2"><Box>
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
      <Box >
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center text-3xl text-black whitespace-nowrap max-md:mt-10">
            <div className="text-center">COSTO</div>
            <div className="mt-11 text-center max-md:mt-12">COSTO</div>
            <div className="mt-12 text-center max-md:mt-12">COSTO</div>
          </div>
        </div>
      </Box></Grid>
        <div className="flex flex-col justify-center self-stretch mt-20 bg-orange-100  rounded-[100px] max-md:mt-10">
          <button
            onClick={handleBuy}
            className="justify-center py-5 pr-5 pl-3 bg-orange-100 border-5 border-black border-solid rounded-[50px] max-md:pr- max-md:pl-0"
          >
            Comprar
          </button>
        </div>

    </>
  );
}
