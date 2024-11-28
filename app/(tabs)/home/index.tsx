import { Text, View } from "@/components/Themed";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold">Home page</Text>

      <Link className="rounded-md m-2 bg-blue-500 p-2" href="../../post/someid">
        <Text className="text-lg font-bold">Open Post</Text>
      </Link>
      <Link
        href="/(tabs)/home/comment"
        className="rounded-md m-2 bg-blue-500 p-2"
      >
        <Text>Comments</Text>
      </Link>
    </View>
  );
}
