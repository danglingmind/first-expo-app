import { StatusBar } from 'expo-status-bar';
import { Button, Platform } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold">custom modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
