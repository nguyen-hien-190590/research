import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import { ScrollView, StyleSheet, Text, View, TextInput , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import LoginPage from './LoginPage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MomoLogin from './MomoLogin';

const Tab = createBottomTabNavigator();



export default function App() {
  
  return (
    <NavigationContainer >
    <Tab.Navigator style = {styles.container}>
      <Tab.Screen name="Momo Login" component={MomoLogin} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="Login" component={LoginPage} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    fontSize: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;
