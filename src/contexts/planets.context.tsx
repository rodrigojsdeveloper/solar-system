import { IPlanetProps, ITPlanetContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const PlanetContext = createContext({} as ITPlanetContextData);

export const PlanetContextProvider = ({ children }: IChildren) => {
  const [planets, setPlanets] = useState<Array<IPlanetProps>>([]);

  useEffect(() => {
    api
      .get("/bodies")
      .then((res) => setPlanets(res.data.bodies))
      .catch((error) => console.error(error));
  }, []);

  return (
    <PlanetContext.Provider
      value={{
        planets,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};
