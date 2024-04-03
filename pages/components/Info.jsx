import * as React from "react";

export default function Info() {
  return (
    <div className="px-20 py-12 bg-yellow-400 rounded-[30px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-3xl text-black max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-end text-5xl max-md:max-w-full max-md:text-4xl">
              <div className="self-center max-md:text-4xl">Empresa</div>
              <div className="mt-7 max-md:max-w-full max-md:text-4xl">
                Escala1, Escala2, Escala3, Escala4
              </div>
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              Hora de Salida
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              Conductor: XXX - YYY - ZZZ
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              Autobus Asignado: XXX - YYY - ZZZ
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto text-3xl text-black max-md:mt-10">
            Hora de Llegada
          </div>
        </div>
      </div>
    </div>
  );
}


