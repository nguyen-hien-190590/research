import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Header } from 'react-native-elements';
<<<<<<< HEAD
import { ScrollView, StyleSheet, Text, View, TextInput , Image, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from "react-native-elements";
=======
import { ScrollView, StyleSheet, Text, View, TextInput , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> 9d01d2615ea4df0beacd961cca2521eac0d972ac


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
<<<<<<< HEAD
      <Tab.Navigator style = {styles.container}>
        <Tab.Screen name="Momo Login" component={MomoLogin} 
          options={
            { title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
            }
          }
        />
        <Tab.Screen name="Home" component={HomeScreen}
          options={
            { title: 'My home',
              headerStyle: {
                backgroundColor: '#fde',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
            }
          }
        />
        <Tab.Screen name="Settings" component={SettingScreen} 
          options={
            { title: 'Setting Screen',
              headerStyle: {
                backgroundColor: '#abc',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
            }
          }  
        />
        <Tab.Screen name="Login" component={LoginPage} 
          options={
            { title: 'My Login',
              headerStyle: {
                backgroundColor: '#889849',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
=======
    <Tab.Navigator style = {styles.container}>
      <Tab.Screen name="Momo Login" component={MomoLogin} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="Login" component={LoginPage} />
      </Tab.Navigator>
      </NavigationContainer>
>>>>>>> 9d01d2615ea4df0beacd961cca2521eac0d972ac
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    fontSize: 40,
<<<<<<< HEAD
    backgroundColor: '#ccc',
=======
    backgroundColor: '#fff',
>>>>>>> 9d01d2615ea4df0beacd961cca2521eac0d972ac
    alignItems: 'center',
    justifyContent: 'center',
  },
});

<<<<<<< HEAD
=======
// export default App;
>>>>>>> 9d01d2615ea4df0beacd961cca2521eac0d972ac
