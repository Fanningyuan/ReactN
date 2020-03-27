import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,AsyncStorage,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    style1:{
        flex:1,
        height:'100%',
        alignItems:'center'
    },
    style2:{
        position:'absolute',
        width:120,
        height:40,
        bottom:150,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue',
        borderRadius:20
    }
})


export default class Yindao extends Component {
    start= ()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    }
    render() {
        return (
            <Swiper showsButtons={false}  >
                <View style={styles.style1} >
                    <Image style={styles.img} source={require('../assets/assets/app2.jpg')} />
                </View>
                <View style={styles.style1} >
                    <Image style={styles.img} source={require('../assets/assets/app3.jpg')} />
                </View>
                <View style={styles.style1} >
                    <Image style={styles.img} source={require('../assets/assets/app4.jpg')} />
                    <TouchableOpacity style={styles.style2} onPress={this.start} >
                        <Text style={{color:'white',fontSize:18}} >开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}

