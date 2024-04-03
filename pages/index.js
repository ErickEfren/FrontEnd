import * as React from "react";
import Header from "./components/Header";
import Transporte from "./components/Transporte";
import MissionVision from "./components/MisionVision";
import Logo from "./components/Logo";

export default function MyComponent() {
  return (
    <div className="flex flex-col items-center pb-14 bg-orange-100">
      <Header />
      <Logo />
      <h1 className="mt-14 text-6xl text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Consulta de Transportes
      </h1>
      <Transporte />
      <MissionVision />
    </div>
  );
}