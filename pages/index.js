import Image from "next/image";
import Transporte from "./components/Transporte";
import TabNavIndex from "./components/TabNavIndex";
import ElementoTransporte from "./components/ElementoTrans";

export default function Home() {
  return (
    <>
    <TabNavIndex active="Transporte" />
    <Transporte />
    </>
  )
}
