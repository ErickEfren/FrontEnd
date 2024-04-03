import FormBol from "./components/FormBol";
import Header from "./components/Header";

export default function PagNosotros() {
  return (
    <div className="flex flex-col items-center pb-16 bg-orange-100">
      <Header />
      <FormBol />
      <FormBol />
      <FormBol />
      <br />
      <button className="justify-center items-end px-16 py-2.5 bg-yellow-400 border-0 border-black border-solid rounded-[100px] max-md:pl-5">
        Guardar
      </button>
    </div>
  );
}
