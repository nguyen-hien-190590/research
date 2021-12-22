import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput , Image} from 'react-native';
import { ActivityIndicator, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Entypo } from '@expo/vector-icons'; 


export default function LoginPage () {

return (
    <SafeAreaView style ={styles.container}>
        <StatusBar style="light" />
        <View style= {styles.content}>
            <View style= {styles.content}>
                <Text style={styles.hiText}> Xin chao</Text>
                <Text style={styles.userText}> Hien</Text>
                <Text style={styles.userText}> 09090903904</Text>
            </View>
        </View>

        <View style = {styles.form}>
            <TextInput
                    style={styles.inputPassword}
                    keyboardType={'numeric'}
                    secureTextEntry={true}
                    // autoFocus={true}
                    placeholder='Nhap mat khau'
                    placeholderTextColor="#929292"
                    
                    // onChangeText={onChangeText}
                    // value={text}
                />
            <Entypo name="lock" size={24} color="black" style={{
                position: "absolute",
                top: 15,
                left: 70
            }}/>
                
            <TouchableOpacity
                style={styles.buttonLogin}
                // onPress={onPress}
            >
                <Text style={styles.buttonLoginText} >DANG NHAP</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.action}>
                <TouchableOpacity
                style={styles.buttonAction}
                // onPress={onPress}
            >
                <Text style={styles.buttonActionText} >Quen mat khau</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonAction}
                // onPress={onPress}
            >
                <Text style={styles.buttonActionText} >Thoat tai khoan</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>

)

}

const TEXT = {
    color:"#fff",
    textAlign: "center"
};

const styles  = StyleSheet.create ({
    container: {
        backgroundColor: "#b0006d",
        paddingTop: 10,
        // textAlign: "center",
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 20

    },
    textWrapper: {

    },
    // content: {
    //     padding: 5,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#eee'
    // },
    hiText: {
        ...TEXT,
        fontSize: 20,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    userText: {
        ...TEXT,
        fontSize: 20,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    form: {
        paddingLeft: 50, paddingRight: 50
    },
    action:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingLeft: 50, paddingRight: 50
    },
    inputPassword: {
        height: 60,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        textAlign: "center"
        

    },
    buttonLogin: {
        backgroundColor: "red",
        height: 50,
        marginTop: 15,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonLoginText: {
        ...TEXT
    },
    buttonAction:{
        ...TEXT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonActionText:{
        ...TEXT,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

