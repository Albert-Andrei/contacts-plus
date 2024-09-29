import "react-native-reanimated";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import FontProvider from "@/providers/FontProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "react-native-toast-message";
import NetworkInfoProvider from "@/providers/NetworkInfoProvider";
import { useNetworkInfo } from "@/contexts/NetworkInfoContext";
import { NoInternet } from "@/components/NoInternet";

export default function RootLayout() {
  return (
    <FontProvider>
      <ThemeProvider>
        <NetworkInfoProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppEntry />
            </PersistGate>
          </Provider>
        </NetworkInfoProvider>
      </ThemeProvider>
    </FontProvider>
  );
}

function AppEntry() {
  const { isConnected } = useNetworkInfo();

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="contact/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create-contact"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>

      {!isConnected && <NoInternet />}
      <Toast />
    </>
  );
}
