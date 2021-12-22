import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';

import { Header } from 'react-native-elements';
import { ScrollView, StyleSheet, Text, View, TextInput , Image, Button, Alert} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MomoLogin = ({navigation}) => {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>

<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Momo login', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
      <ScrollView>

      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      
        <Text>Some text</Text>
        <View>
          <Text>Some more text</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="You can type in me"
        />

<Button
        title="Press me"
        // onPress={() => Alert.alert('button alert')}
        onPress={() => navigation.navigate('Settings')}
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

export default MomoLogin;
