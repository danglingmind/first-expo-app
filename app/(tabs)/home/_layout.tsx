import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="comment"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
};
