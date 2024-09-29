import { useFonts } from "expo-font";
import React, { FC, PropsWithChildren, useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";
const PoppinsMedium = require("../../assets/fonts/Poppins-Medium.ttf");
const PoppinsRegular = require("../../assets/fonts/Poppins-Regular.ttf");

const fontConfig = {
  "Poppins-Medium": PoppinsMedium,
  "Poppins-Regular": PoppinsRegular,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const FontProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const [fontsLoaded] = useFonts(fontConfig);

  if (fontsLoaded) {
    SplashScreen.hideAsync();

    return <>{children}</>;
  }

  return null;
};

export default FontProvider;
