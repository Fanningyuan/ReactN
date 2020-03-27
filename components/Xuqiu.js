import React, { Component } from 'react'
import {
    SafeAreaView,
	StyleSheet,
	ImageBackground,
	ScrollView,
	Image,
	View,
	Text,
    TextInput,
    Dimensions,
}
from 'react-native';
import { Button } from '@ant-design/react-native';
const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#f23030',
        height:65
    },
    search:{
        width:400,
        height:40,
        borderRadius:30,
        backgroundColor:'#fbb8b8',
        marginTop:15,
        color:'white',
        paddingLeft:50,
        
    },
    searchimg:{
        width:25,
        height:25,
        marginTop:23,
        marginRight:-35,
        zIndex:999
    },
    box:{
        height:120,
        backgroundColor:'white',
        flexDirection:'row',
        marginTop:15
    },
    boximg:{
        marginTop:10,
        marginLeft:20
    },
    boxtext:{
        marginTop:45,
        marginLeft:50,
        fontSize:20,
        width:120
    },
    button:{
        width:300,
        height:50,
        backgroundColor:'#f23030',
        color:'white',
        marginTop:20,
        marginLeft:90,
        borderRadius:10
    },
    slide:{
        width:480,
        justifyContent:'center',
        alignItems:'center'
    },
});

const Xuqiu = ()=> {
        return (
            <>
            <SafeAreaView>
                <ScrollView>
                    {/* 搜索框 */}
                    <View style={styles.top}>
                        <ImageBackground source={require('../img/pic6_03.jpg')} style={styles.searchimg} />
                        <TextInput placeholder='请输入商品名称' style={styles.search} />
                        <Image source={require('../img/pic2_03.jpg')} style={{marginTop:10,marginRight:-35,marginLeft:15}} />
                    </View>
                    {/* 轮播图 */}
                    <View>
                        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.slide} >
                                <Image source={require('../img/pic1_02.jpg')} style={{width:480,height:273}} />
                            </View>
                            <View style={styles.slide} >
                                <Image source={require('../img/pic1_02.jpg')} style={{width:480,height:273}} />
                            </View>
                            <View style={styles.slide} >
                                <Image source={require('../img/pic1_02.jpg')} style={{width:480,height:273}} />
                            </View>
                        </ScrollView>
                    </View>
                    {/* 身体 */}
                    <View style={{backgroundColor:'#eee',height:700}}>
                        <View style={styles.box}>
                            <Image source={require('../img/pic3_09.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>居家维修保养</Text>
                            <Image source={require('../img/pic8_07.jpg')} style={{marginTop:33,marginLeft:130}} />
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../img/pic4_12.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>住宿优惠</Text>
                            <Image source={require('../img/pic8_07.jpg')} style={{marginTop:33,marginLeft:130}} />
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../img/pic4_14.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>出行接送</Text>
                            <Image source={require('../img/pic8_07.jpg')} style={{marginTop:33,marginLeft:130}} />
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../img/pic5_16.jpg')} style={styles.boximg} />
                            <Text style={styles.boxtext}>E组活动</Text>
                            <Image source={require('../img/pic8_07.jpg')} style={{marginTop:33,marginLeft:130}} />
                        </View>
                        <Button style={styles.button}>发布需求</Button>
                        <Text style={{marginLeft:180,marginTop:50}}>@E族之家版权所有</Text>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
            </>
        )
}
export default Xuqiu;