import { ScrollView, StyleSheet, Text, View, TextInput , Image} from 'react-native';
import React, {Component} from 'react';
import { ActivityIndicator, SafeAreaView, FlatList, StatusBar } from 'react-native';



export default class SettingScreen extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            dataSouce: []
        }
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            })
        })
    }

    _renderItem = ({item, index}) => {
        return (
            <View>

                <Text>{item.id + ". " + item.title}</Text>
            </View>
        )
    }

    render() {
        let {container} = styles
        let {dataSource, isLoading} = this.state
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size = "large" animating />
                </View>
            )
        } else {
            
            return (
                <View>
                <FlatList
                data={dataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
                </View>
            );
        }
    }



}

const styles  = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 50

    },
    item: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
})

