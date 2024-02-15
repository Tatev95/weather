import { createContext } from "react";

type TempContextType = {
  name: string;
  tempC: number;
};
export const TempContext = createContext<TempContextType>({
  name: "",
  tempC: 0,
});
