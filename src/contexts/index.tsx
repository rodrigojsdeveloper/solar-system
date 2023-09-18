import { PlanetContextProvider } from "./planets.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <PlanetContextProvider>{children}</PlanetContextProvider>;
};

export { Providers };
