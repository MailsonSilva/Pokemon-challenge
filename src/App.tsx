import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
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
