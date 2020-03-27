import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    View, 
    Text, 
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Car extends Component {
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text>购物车</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
            
                
                
            
        )
    }
}