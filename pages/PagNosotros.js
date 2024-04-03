import TabNavIndex from "./components/Header";
import Nosotros from "./components/Nosotros";

export default function PagNosotros() {
  return (
    <div className="flex flex-col items-center pb-14 bg-orange-100">
      <TabNavIndex active="Nosotros" />
      <Nosotros />
    </div>
  );
}
