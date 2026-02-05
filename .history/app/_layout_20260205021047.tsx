import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />

      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
