import { Grid, Box } from "@radix-ui/themes";
import * as React from "react";
import Counter from "./CounterElements/Counter";
import axios from "axios";

export default function Boleto() {
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
    <>
      <div className="px-20 py-12 bg-yellow-400 rounded-[30px] max-md:px-5">
        <Grid rows="1" columns="7">
          <Box align="center">
            <div className="flex flex-col my-auto">
              <div>Completo</div>
              <div className="mt-12">INAPAM</div>
              <div className="mt-12">Medio</div>
              <div className="mt-12 max-md:mt-10">Profesor</div>
            </div>
          </Box>
          <Box>
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
          </Box>
        </Grid>
      </div>
    </>
  );
}
