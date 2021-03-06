import 'react-native-gesture-handler';
import 'reflect-metadata';
import React from 'react';
import { Text, View } from 'react-native';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold, useFonts
} from '@expo-google-fonts/dm-sans';

import './src/database';
import { NavigationContainer } from '@react-navigation/native';

import AppRotas from './src/routes/AppRotas';

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular, 
    DMSans_500Medium, 
    DMSans_700Bold 
  });

  if(!fontsLoaded) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <AppRotas/>
    </NavigationContainer>
  );
}
