import { Text, View } from '@/components/Themed';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from 'expo-router';
import { Button } from 'react-native';

export default function PostScreen() {
    const {id} = useLocalSearchParams();
    const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold">Post {id}</Text>
    </View>
  );
}