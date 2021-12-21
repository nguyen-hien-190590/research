import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import { ScrollView, StyleSheet, Text, View, TextInput , Image} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>


      <ScrollView>

      
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="You can type in me"
        />
      </ScrollView>

      

      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
