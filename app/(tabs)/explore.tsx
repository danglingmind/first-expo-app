import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl font-bold'>Tab Two</Text>
      <View className='w-full h-1 bg-gray-200 my-4' />
    </View>
  );
}
