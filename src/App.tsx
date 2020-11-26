import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './routes';
import { AppLoading } from 'expo';
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { RobotoSlab_400Regular, RobotoSlab_500Medium } from "@expo-google-fonts/roboto-slab";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#28262E"
        translucent
      />
      <Routes />
    </SafeAreaView>
  );
}
