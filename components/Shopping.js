import React from 'react';
import {
    SafeAreaView,
	StyleSheet,
	ImageBackground,
	ScrollView,
	Image,
	View,
	Text,
	TextInput,
}
from 'react-native';

const styles = StyleSheet.create({
    box1:{
        backgroundColor:'#fff'
    },
    top:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'white'
    },
    top2:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'white',
        borderBottomWidth:1,
		borderBottomColor:'#eee'
    },
    search:{
        width:420,
        height:40,
        borderRadius:10,
        backgroundColor:'#eee',
        marginTop:15,
    },
    searchimg:{
        width:25,
        height:25,
        marginTop:23,
        marginLeft:-40
    },
    bar:{
        paddingTop:15,
		paddingBottom:15,
		paddingLeft:30,
		paddingRight:30,
        fontSize:18,
        color:'#999999'
    },
    body:{
        backgroundColor:'#eee',
        height:1000
    },
    body1:{
        width:215,
		height:310,
        backgroundColor:'white',
        marginLeft:17
    },
    bodyimg:{
        width:215,
        height:245,
        marginTop:-25
    },
    text3:{
        paddingLeft:15
    },
    text4:{
        color:'red',
		paddingLeft:15,
		paddingTop:10
    }
});

const App = () =>{
    return(
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.top}>
                        <TextInput placeholder='请输入商品名称' style={styles.search} />
                        <ImageBackground source={require('../img/search.png')} style={styles.searchimg} />
                    </View>
                    <View style={styles.top2}>
                        <Text style={styles.bar}>综合</Text>
                        <Text style={styles.bar}>销量</Text>
                        <Text style={styles.bar}>新品</Text>
                        <Text style={styles.bar}>价格</Text>
                        <Text style={styles.bar}>信用</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={{flexDirection:'row',paddingTop:10}}>
                            <View style={styles.body1} >
                                <Image source={require('../img/pic4.png')} style={styles.bodyimg} />
                                <Text style={styles.text3} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={styles.text4} >36.00</Text>
                            </View>
                            <View style={styles.body1} >
                                <Image source={require('../img/pic7.png')} style={styles.bodyimg} />
                                <Text style={styles.text3} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={styles.text4} >36.00</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:10}}>
                            <View style={styles.body1} >
                                <Image source={require('../img/pic4.png')} style={styles.bodyimg} />
                                <Text style={styles.text3} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={styles.text4} >36.00</Text>
                            </View>
                            <View style={styles.body1} >
                                <Image source={require('../img/pic7.png')} style={styles.bodyimg} />
                                <Text style={styles.text3} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={styles.text4} >36.00</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:10}}>
                            <View style={styles.body1} >
                                <Image source={require('../img/pic4.png')} style={styles.bodyimg} />
                                <Text style={styles.text3} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={styles.text4} >36.00</Text>
                            </View>
                            <View style={styles.body1} >
                                <Image source={require('../img/pic7.png')} style={styles.bodyimg} />
                                <Text style={styles.text3} >Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={styles.text4} >36.00</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
export default App;