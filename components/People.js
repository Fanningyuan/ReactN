import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    View, 
    Text, 
    SafeAreaView,
    StyleSheet,
    Image,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    box1:{
        backgroundColor:'#f23030',
        height:300
    },
    box1img:{
        marginTop:30,
        marginLeft:130
    },
    box1text:{
        fontSize:20,
        color:'white',
        marginLeft:160,
        marginTop:20
    },
    box2:{
        height:70,
        flexDirection:'row',
        backgroundColor:'white',
        borderBottomColor:'#eee',
        borderBottomWidth:1,
    },
    box2text:{
        fontSize:20,
        marginTop:20,
        marginLeft:20,
        color:'#4f4e4e'
    },
    box3:{
        backgroundColor:'white',
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:15
    },
    box4:{
        height:125,
        width:150,
        justifyContent:'center'
    },
    box4text:{
        fontSize:20,
        marginLeft:50,
        marginTop:10,
        color:'#4f4e4e'
    },
    box5:{
        height:125,
        width:170,
        justifyContent:'center'
    },
    box5text:{
        fontSize:20,
        marginLeft:30,
        marginTop:10,
        color:'#4f4e4e'
    },
})
export default class People extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:''
        }
    }
    exit=()=>{
        AsyncStorage.clear()
        Actions.login()
    }
    takephoto=()=>{
        ImageCropPicker.openCamera({
            width:300,
            height:400,
            cropping:true,
        }).then(image=>{
            console.log(image.path)
            AsyncStorage.setItem('image', image.path);
            AsyncStorage.getItem('image').then((res)=>{
                this.setState({imageUrl:{uri:res}})
            })
            
            
        });
    }
    render(){

        return(

                <SafeAreaView>
                    <ScrollView>
                        {/* 头像 */}
                        <View style={styles.box1}>
                            <Button onPress={()=>{this.takephoto()}}>
                                <Image source={this.state.imageUrl} style={{height:200,width:200,borderRadius:100,marginLeft:130,marginTop:20}} />
                            </Button>
                           
                            <Text style={styles.box1text}>BINNU DHILLON</Text>
                        </View>

                        {/* 弹性盒布局 */}
                        <View style={{height:950,backgroundColor:'#eee'}}>
                            {/* 我的个人中心 */}
                            {/* <View style={styles.box2}>
                                <Icon color={'#999999'} 
                                    size={35}
                                    style={{marginTop:15,marginLeft:20}}
                                    name='user-o' />
                                <Text style={styles.box2text}>我的个人中心</Text>
                            </View>

                            <View style={styles.box3}>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='cog'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={styles.box4text}>账户管理</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='map-marker'
                                        style={{marginLeft:75}}
                                    />
                                    <Text style={styles.box4text}>收货地址</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='id-card-o'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={styles.box4text}>我的信息</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='file-text-o'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={styles.box4text}>我的订单</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='qrcode'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={{fontSize:20,
                                                    marginLeft:40,
                                                    marginTop:10,
                                                    color:'#4f4e4e'}}>我的二维码</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='dollar'
                                        style={{marginLeft:75}}
                                    />
                                    <Text style={styles.box4text}>我的积分</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='star'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={styles.box4text}>我的收藏</Text>
                                </View>
                            </View> */}
                            {/* E族活动 */}
                            <View style={styles.box2}>
                                <Icon color={'#999999'} 
                                    size={35}
                                    style={{marginTop:15,marginLeft:20}}
                                    name='user-o' />
                                <Text style={styles.box2text}>E族活动</Text>
                            </View>

                            <View style={styles.box3}>
                                <View style={styles.box5}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='wrench'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={styles.box5text}>居家维修保养</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='plane'
                                        style={{marginLeft:75}}
                                    />
                                    <Text style={styles.box4text}>出行接送</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='street-view'
                                        style={{marginLeft:75}}
                                    />
                                    <Text style={styles.box4text}>我的受赠人</Text>
                                </View>
                                <View style={styles.box5}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='hotel'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={styles.box5text}>我的住宿优惠</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='fa'
                                        style={{marginLeft:65}}
                                    />
                                    <Text style={{fontSize:20,
                                                    marginLeft:40,
                                                    marginTop:10,
                                                    color:'#4f4e4e'}}>我的活动</Text>
                                </View>
                                <View style={styles.box4}>
                                    <Icon color={'#999999'}
                                        size={50}
                                        name='map-o'
                                        style={{marginLeft:60}}
                                    />
                                    <Text style={styles.box4text} onPress={()=>Actions.public()}>我的发布</Text>
                                </View>
                            </View>
                            <Text style={{color:'#999999',fontSize:15,marginLeft:170,marginTop:30}}>BINNU DHILLON | 退出</Text>
                            <TouchableOpacity
                                backAndroidHandler={()=>{
                                    if(Actions.currentScene != 'personal'){
                                        Actions.pop();
                                        return true;
                                    }else{
                                        if(new Date().getTime()-now<2000){
                                            BackHandler.exitApp();
                                        }else{
                                            ToastAndroid.show('确定要退出吗',100);
                                            now = new Date().getTime();
                                            return true;
                                        }
                                    }
                                    
                                }}
                                style={{
                                    width: '80%',
                                    height: 40,
                                    backgroundColor: '#ccc',
                                    marginTop: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom:250,
                                    marginLeft:40
                                }}
                                onPress={this.exit}>
                                <Text>点击这里，退出登陆</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
        )
    }
}
