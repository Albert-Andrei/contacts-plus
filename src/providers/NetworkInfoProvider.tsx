import { PropsWithChildren, useState, FC, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { NetworkInfoContext } from "@/contexts/NetworkInfoContext";

const NetworkInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setIsConnected(state.isConnected);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <NetworkInfoContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </NetworkInfoContext.Provider>
  );
};

export default NetworkInfoProvider;
