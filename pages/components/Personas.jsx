import * as React from "react";
import Transporte from "./Transporte";

function MinusButton({ onClick }) {
  return (
    <button
      className="flex justify-center items-center px-5 bg-yellow-400 rounded-full h-[50px] w-[50px] max-md:px-5"
      onClick={onClick}
    >
      -
    </button>
  );
}

function PlusButton({ onClick }) {
  return (
    <button
      className="flex justify-center items-center px-5 bg-yellow-400 rounded-full h-[50px] w-[50px]"
      onClick={onClick}
    >
      +
    </button>
  );
}

function Counter({ label, count, onMinus, onPlus }) {
  return (
    <div className="flex gap-5 justify-between mt-4">
      <MinusButton onClick={onMinus} />
      <div className="my-auto">{count}</div>
      <PlusButton onClick={onPlus} />
    </div>
  );
}

function Continuar() {
  return (
    <div className="flex flex-col justify-center self-center mt-16 max-w-full bg-white border border-black border-solid rounded-[100px] w-[223px] max-md:mt-10">
      <button className="justify-center py-5 pr-5 pl-5 bg-yellow-400 border-0 border-black border-solid rounded-[100px] max-md:pr-5 max-md:pl-6">
            Continuar
      </button>
    </div>
  );
}

export default function Persona() {
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
    <form className="flex flex-col px-16 pt-5 pb-8 text-3xl text-black whitespace-nowrap bg-orange-100 rounded-3xl max-w-[487px] max-md:px-5">
      <div className="flex gap-5 justify-between pt-14 text-center">
        <div className="flex flex-col my-auto">
          <div>Completo</div>
          <div className="mt-9">INAPAM</div>
          <div className="self-center mt-12 max-md:mt-10">Medio</div>
          <div className="mt-12 max-md:mt-10">Profesor</div>
        </div>
        <div className="flex flex-col">
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
        </div>
      </div>
      <Continuar />
    </form>
  );
}