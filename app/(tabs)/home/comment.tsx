import { View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CommentModal() {
  return (
    <View>
      <Text>Comments</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
