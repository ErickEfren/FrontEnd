import * as React from "react";
import Header from "./components/Header";

export default function MyComponent() {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center px-8 py-16 text-black bg-orange-100 max-md:px-5">
      <div className="mt-14 text-6xl text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        ¡Gracias por su Compra!
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b63422a47765a37a6ce3d58c90078d27225b0d889a1d1b213564dab937c4a16?apiKey=b543ac7ff67748148da449abd9cad6af&"
        className="z-10 mt-3 max-w-full aspect-[1.56] w-[700px]"
      />
      <div className="flex justify-center items-center self-stretch px-16 py-16 text-3xl bg-yellow-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-44 w-full max-w-[824px] max-md:mt-10 max-md:max-w-full">
          <div className="text-6xl text-center max-md:max-w-full max-md:text-4xl">
            Su boleto se ha registrado correctamente
          </div>
          <div className="mt-7 text-center max-md:max-w-full">
            Se le envió un mensaje a su correo registrado con la confirmación
            del pago
          </div>
          <div className="flex flex-col justify-center self-center mt-12 max-w-full bg-orange-100 rounded-[100px] w-[313px] max-md:mt-10">
            <div className="justify-center items-end px-16 py-2.5 bg-orange-100 border-0 border-black border-solid rounded-[100px] max-md:pl-5">
              Llenar Boletos
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


