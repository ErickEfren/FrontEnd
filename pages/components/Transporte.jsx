import { useRouter } from 'next/router';
import React from 'react';
import Persona from './Personas';
import { useState } from 'react';

export default function Transporte() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
        setModalOpen(!modalOpen);
  };
  const VerMas = () => {
      router.push("./PagTransportes")
  }


    return (
      <div className="px-6 pt-14 pb-4 mt-11 w-full bg-yellow-400 rounded-3xl border border-black border-solid max-w-[1120px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <label htmlFor="origin" className="self-center text-3xl text-black whitespace-nowrap max-md:mt-10">
              Origen
            </label>
            <input
              type="text"
              id="origin"
              className="shrink-0 mt-5 h-10 bg-white rounded-2xl border border-black border-solid"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <label htmlFor="destination" className="self-center text-3xl text-black whitespace-nowrap max-md:mt-10">
              Destino
            </label>
            <input
              type="text"
              id="destination"
              className="shrink-0 mt-6 h-10 bg-white rounded-2xl border border-black border-solid"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <label htmlFor="departure" className="self-center text-3xl text-black whitespace-nowrap max-md:mt-10">
              Salida
            </label>
            <input
              type="datetime-local"
              id="departure"
              className="shrink-0 mt-6 h-10 bg-white rounded-2xl border border-black border-solid"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <label htmlFor="passengers" className="self-center text-3xl text-black whitespace-nowrap max-md:mt-10">
              Pasajeros
            </label>
            <div className="flex flex-col justify-center mt-5 border border-black border-solid rounded-[100px]">
              <button type="button" onClick={toggleModal} className="justify-center py-2.5 pr-16 pl-16 bg-white border border-black border-solid rounded-[100px] max-md:pr-5 max-md:pl-6">
                ¿Cuántos Van?
              </button>
            </div>
            <div className="flex flex-col justify-center mt-5 border border-black border-solid rounded-[100px]">
              <button type="button" onClick={VerMas} className="justify-center py-2.5 pr-16 pl-16 bg-white border border-black border-solid rounded-[100px] max-md:pr-5 max-md:pl-6">
                Buscar
              </button>
            </div>
          </div>
        </div>
        {modalOpen && <Persona closeModal={toggleModal} />}
      </div>
    );
  }