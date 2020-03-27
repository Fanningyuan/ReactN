import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    View, 
    Text, 
    SafeAreaView,
    StyleSheet,
    ToastAndroid,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
    header:{
        backgroundColor:'red',
        height:50,
        flexDirection:'row'
    },
    herder_1:{
        color:'white',
        fontSize:22,
        justifyContent:'center',
        marginTop:10,
        marginLeft:170
    },
    herder_2:{
        color:'white',
        fontSize:40,
        marginLeft:130,
        marginTop:-15
    },
    body:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingBottom:10
    },
    titile:{
        fontSize:17,
        marginTop:10,
        width:300
    },
    create:{
        fontSize:17,
        marginTop:10,
    },
    fb:{
        fontSize:17,
        marginTop:10,
        marginLeft:20
    },
    fb1:{
        fontSize:17,
        marginTop:10,
        marginLeft:20,
        color:'red'
    },
    button:{
        backgroundColor:'red',
        color:'white',
        borderRadius:20,
        width:80,
        marginLeft:40,
        marginTop:20
    },
    button1:{
        backgroundColor:'red',
        color:'white',
        borderRadius:20,
        width:80,
        marginLeft:90,
        marginTop:20
    },
    page:{
        marginTop:20,
        marginLeft:100,
        fontSize:15
    }
})
export default class Public extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            pages:1,
            fb:'已回复',
            wfb:'未回复'
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.pages)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        
    }
    componentDidUpdate(preProps,prevState){
        if(this.state.pages != prevState.pages){
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.pages)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    upPage = ()=>{
        var page = this.state.pages;
        if(page>1){
            page --;
            this.setState({
                pages:page
            })
        }else{
            ToastAndroid.show('到头了!', ToastAndroid.TOP);
        }

    }
    downPage = ()=>{
        var page = this.state.pages;
        page ++;
        this.setState({
            pages:page
        })
    }
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.header}>
                        <Icon 
                            name='chevron-left'
                            color={'white'}
                            size={25}
                            style={{marginLeft:10,marginTop:13}}
                            onPress={()=>Actions.per()}
                        />
                        <Text style={styles.herder_1}>我的发布</Text>
                        <Text style={styles.herder_2}>...</Text>
                    </View>
                    {
                        this.state.data.map((item)=>(
                            <View style={styles.body}>
                                <Text style={styles.titile}>{item.title.length<15?item.title:item.title.substr(0,16)+'...'}</Text>
                                <Text style={styles.create}>{item.create_at.substr(0,10)}</Text>
                                {Math.round(Math.random())==0?
                                <Text style={styles.fb}>{this.state.fb}</Text>:
                                <Text style={styles.fb1}>{this.state.wfb}</Text>
                                }
                            </View>
                        ))
                    }
                    <View style={{flexDirection:'row'}}>
                        <Button style={styles.button} onPress={()=>this.upPage()}>上一页</Button>
                        <Text style={styles.page}>第{this.state.pages}页</Text>
                        <Button style={styles.button1} onPress={()=>this.downPage()}>下一页</Button>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
            
                
                
            
        )
    }
}