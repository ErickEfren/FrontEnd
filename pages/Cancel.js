import { useRouter } from "next/router";
import * as React from "react";

export default function MyComponent() {
  const router = useRouter();
  const Volver = () => {
    router.push("./")
  }

  return (
    <div className="flex justify-center items-center px-16 py-20 text-black bg-orange-100 max-md:px-5">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-20 pb-16 mt-5 max-w-full fill-[linear-gradient(180deg,#F1D112_0%,#FAFF00_100%)] min-h-[592px] w-[825px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/435c32a4b78c3d5d02b5b6c08dfda307dcca6d82a9d647132b0c374d6cec8d53?apiKey=b543ac7ff67748148da449abd9cad6af&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-48 mb-5 max-w-full w-[498px] max-md:mt-10">
          <div className="text-6xl text-center max-md:max-w-full max-md:text-4xl">
            Se canceló la transacción
          </div>
          <button onClick={Volver} className="flex flex-col justify-center self-center mt-28 max-w-full text-3xl whitespace-nowrap bg-orange-100 border border-black border-solid rounded-[100px] w-[223px] max-md:mt-10">
            <div className="justify-center items-start px-16 py-2.5 bg-orange-100 border-0 border-black border-solid rounded-[100px] max-md:pr-5 max-md:pl-6">
              Volver
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}


