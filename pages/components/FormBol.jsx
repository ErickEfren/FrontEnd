import { Box, Text } from "@radix-ui/themes";
import * as React from "react";

export default function FormBol() {
  return (
    <>
    <Box align="center"><Text size="4"><br /></Text></Box>
    <div className="flex flex-col px-12 pt-8 pb-5 bg-yellow-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between">
        <div className="my-auto">Nombre</div>
        <input type="text" className="shrink-0 h-10 bg-white rounded-2xl border border-black border-solid w-[223px]" />
      </div>
      <div className="flex gap-5 justify-between mt-5">
        <div className="my-auto">Edad</div>
        <input type="number" className="shrink-0 h-10 bg-white rounded-2xl border border-black border-solid w-[223px]" />
      </div>
    </div>
    </>
  );
}
