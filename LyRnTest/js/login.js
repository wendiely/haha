'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Image,
  AlertIOS,
} from 'react-native';

import {connect} from 'react-redux';
import {logIn} from './actions/types';
import {nullLogin} from './actions/types';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',   
        };
    }
    handlePress(){
      let opt = {
            'name': this.state.username,
            'password': this.state.password,
        };
      if(!this.state.username || !this.state.password){
            this.props.dispatch(nullLogin());
            return;
        }
        this.props.dispatch(logIn(opt));
    }
    onChangeName(text){
        this.setState({'username': text});
    }

    onChangePswd(text){
        this.setState({'password': text});
    }
    render(){
        return (
          <View style={{marginTop: 60}}>     
            <View>                
                <TextInput
                    ref="login_name" 
                    placeholder='用户名'
                    onChangeText={this.onChangeName.bind(this)} 
                    style={{width: 200,height:40,marginLeft:20}} />
            </View>
            <View>
                <TextInput 
                    ref="login_psw"  
                    secureTextEntry={true}
                    placeholder='密码'
                    onChangeText={this.onChangePswd.bind(this)} 
                    style={{width: 200,height:40,marginLeft:20}}/>
            </View>
            <View >
                <Text onPress={this.handlePress.bind(this)}>登陆</Text>
            </View>              
          </View>
        );
    }
}

function select(store){
  console.log(store);
  return {
    isLoggedIn: store.isLoggedIn,
    loginStatus: store.loginStatus,
  }
}


export default connect(select)(LoginPage);


