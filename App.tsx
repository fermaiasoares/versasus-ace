import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  useFonts, 
  DMSans_400Regular, 
  DMSans_500Medium, 
  DMSans_700Bold 
} from '@expo-google-fonts/dm-sans';
import Login from './src/pages/Login';

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

  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});