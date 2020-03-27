import React,{useState,useEffect} from 'react';
import {View,AsyncStorage } from 'react-native';
import {Router, Overlay, Scene, Tabs, Lightbox, Modal } from 'react-native-router-flux';
import Car from './components/Car';
import Shopping from './components/Shopping';
import Xuqiu from './components/Xuqiu';
import People from './components/People';
import Icon from 'react-native-vector-icons/FontAwesome'
import Public from './components/Public'
import Login from './components/Login'
import YinDao from './components/Yindao'
import Zhuce from './components/ZhuCe'


console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);

	let init =()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}

	useEffect(()=>{
		init();
	},[])
	
	let afterInstall = ()=>{
		console.log('after install');
		setInstall(false)
	}
	if(isInstall){
		return  <View style={{flex:1}}>
					<YinDao afterInstall={afterInstall} />
				</View>
	}

	return (
		<Router>
			<Overlay>
				<Modal key="modal" hideNavBar>
					<Lightbox key="lightbox">
							<Scene key="root" hideNavBar>
								<Tabs 
									key='tabbar'
									hideNavBar
									activeTintColor="red"
									inactiveTintColor="#999999"
									tabBarStyle={{backgroundColor:'white'}}
								>
									{/* 首页 */}
									<Scene key='home'
										title='首页'
										hideNavBar
										icon={
											({focused})=><Icon 
												color={focused?'red':'#999999'} 
												size={25}
												name="home"
												
											/>
										}
										component={Xuqiu}
									/>
									{/* 商品分类 */}
									<Scene key='msg'
										title='商品分类'
										hideNavBar
										icon={
											({focused})=><Icon 
												color={focused?'red':'#999999'} 
												size={25}
												name="th-list"
											/>
										}
										component={Shopping}
									/>

									{/* 购物车 */}
									<Scene 
										key='doc'
										hideNavBar
										icon={({focused})=>
											<Icon 
												color={focused?'red':'#999999'} 
												size={25}
												name='shopping-cart'/
										>}
										title="购物车"
										component={Car}
									/>
									{/* 个人中心 */}
									<Scene 
										key='per'
										hideNavBar
										icon={({focused})=>
											<Icon 
												color={focused?'red':'#999999'} 
												size={25}
												name='user'/
										>}
										title="个人中心"
										component={People}
									/>
								</Tabs>
							</Scene>
					</Lightbox>
					<Scene 
						key='public'
						component={Public}
					/>
					<Scene initial={!isLogin}  key="login" component={Login} />		
					<Scene key="register" component={Zhuce} />
				</Modal>
				
			</Overlay>
		</Router>
	);
};


export default App;
