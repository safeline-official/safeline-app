import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import background from '../images/Fluorescent-Gradient-Final.jpg';
import logo from '../images/Logo_transparent_whitedots.png';
import CircleButton from '../components/circlebutton';
import {ImageBackground, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage/lib/AsyncStorage';
import firebase from 'react-native-firebase';

class TInput extends Component {
    render() {
      return(
        <View style={styles.tinputview}>
          <Text style={styles.tinputtexttitle}>{this.props.texttitle}</Text>
          <TextInput 
                style={styles.textinput} 
                placeholder = "type here"
                onChangeText={(text) => this.props.onChangeText(text, this.props.texttitle)}
            />
          <View
            style={{
              borderBottomColor: this.props.color,
              borderBottomWidth: 1,
            }}
          />
        </View>
      );
    }
  }

  

export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.inp = {
            username: "",
            password: ""
        }
        this.updateValue = this.updateValue.bind(this);
        this.login  = this.login.bind(this);
        this.state = {
            color: "black"
        };
        this.err_message = <Text style={{color:"transparent"}}>placeholder</Text>;
        this.getData = this.getData.bind(this);
        this.setUser = this.setUser.bind(this);
        this.signup = this.signup.bind(this);
        this.processData = this.processData.bind(this);
        this.getData();
        this.data = {};
        var ref = firebase.database().ref("users");
        ref.on('value', this.processData);
    }

    processData(data) {
        this.data = data.val();
    }

    signup(){
        const { navigate } = this.props.navigation;
        navigate('SignUp', { data: this.data });
    }

    static navigationOptions = {
      header : null
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@username')
            if(value !== null) {
                // value previously stored
                this.props.navigation.navigate('Home');
            }
        } catch(e) {
            // error reading value
        }
    }

    setUser = async () => {
        try {
        await AsyncStorage.setItem('@username', this.inp.username);
        } catch(e) {
        // save error
        }
    }
            

    updateValue(text, type){
        this.inp[type] = text;
    }

    login(){
        // if username and password match the ones in database
        if( this.data.hasOwnProperty(this.inp.username) &&
            this.data[this.inp.username].Password===this.inp.password){
            this.setUser();
            this.err_message = <Text style={{color:"transparent"}}>Incorrect username/password</Text>
            this.setState({
                color: "black"
            });
            this.props.navigation.navigate('Home');
        }else{
            this.err_message = <Text style={{color:"red"}}>Incorrect username/password</Text>
            this.setState({
                color: "red"
            });
        }
    }


    render() {
        return (
            <ImageBackground source={background} style={styles.backgroundcss}> 
            <Image 
                source={logo} 
                style={styles.logocss}
            />
            <TInput 
                texttitle='username' 
                onChangeText={this.updateValue} 
                color={this.state.color}
                />
            <TInput 
                texttitle='password' 
                onChangeText={this.updateValue} 
                color={this.state.color}
                />
            {this.err_message}
            <CircleButton 
                name='LOGIN'
                onPress={this.login}
            />
            <CircleButton 
                name='SIGN-UP'
                onPress={this.signup}
            />
            {/* <CircleButton /> */}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundcss: {
        width: '100%', 
        height: '100%', 
        alignItems: 'center',
        flex: 1,
    },
    logocss: {
        marginTop: '10%',
        width: '80%',
        height: '50%', 
        resizeMode: 'contain',
        marginBottom: '-5%',
    },
    textinput: {
        color: 'white',
        textAlign: 'center',
        paddingBottom: '2%',
    },
    tinputtexttitle: {
        color: 'black',
        marginRight: '60%',
        paddingBottom: '5%',
    },
    tinputview: {
        paddingBottom: '5%',
    },
});