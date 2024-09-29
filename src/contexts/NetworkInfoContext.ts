import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ThemeContextProps {
  isConnected: boolean;
  setIsConnected: Dispatch<SetStateAction<boolean>>;
}

export const NetworkInfoContext = createContext<ThemeContextProps>({
  isConnected: true,
  setIsConnected: () => {},
});

export const useNetworkInfo = () => useContext(NetworkInfoContext);
