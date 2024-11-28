import { Text, View } from "@/components/Themed";
import { Link, Redirect } from "expo-router";
import { Button } from "react-native";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/clerk-expo";

export default function FirstPage() {
  const { user } = useUser();
  const { signOut } = useClerk();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="color-white">First page</Text>
      <View>
        <SignedIn>
          <Redirect href={"/(tabs)/home"} />
          <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
          <Button
            title="Sign Out"
            onPress={() => {
              signOut();
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link
            href="../../(auth)/sign-in"
            className="bg-blue-500 p-2 rounded-md m-2"
          >
            <Text>Sign In</Text>
          </Link>
          <Link
            href="../../(auth)/sign-up"
            className="bg-blue-500 p-2 rounded-md m-2"
          >
            <Text>Sign Up</Text>
          </Link>
        </SignedOut>
      </View>
    </View>
  );
}
