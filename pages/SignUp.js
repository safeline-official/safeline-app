import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, Image, View, Button} from 'react-native';
import CircleInput from '../components/CircleInput';
import background from '../images/Fluorescent-Gradient-Final.jpg';
import logo from '../images/Logo_transparent_whitedots.png';
import CircleButton from '../components/circlebutton';
import firebase from 'react-native-firebase';

const firebase_regex = /^[!"%&'()*+\,\-\/0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ\^_`abcdefghijklmnopqrstuvwxyz{|}]{1,768}$/

export default class SignUpScreen extends Component {
  static navigationOptions = {
    header : null
  }

  constructor(props){
    super(props);
    this.updateValue = this.updateValue.bind(this);
    this.back = this.back.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      color: ["black","black","black"]
    }
    this.inp = {
      "Username":"",
      "Email" : "",
      "Password" : "",
      "Password Confirmation" : ""
    }
    this.data = this.props.navigation.state.params.data;
    this.err = [  <Text style={{color:"transparent"}}>placeholder</Text>,
                  <Text style={{color:"transparent"}}>placeholder</Text>,
                  <Text style={{color:"transparent"}}>placeholder</Text>];
  }

  back(){
    this.props.navigation.navigate('Login');
  }

  signup(){
    var colors = ["black", "black", "black"];

    if(this.data.hasOwnProperty(this.inp["Username"])){
      this.err[0] = <Text style={{color:"red"}}>Username Taken</Text>;
      colors[0] = "red";
    }else if(this.inp["Username"] === ""){
      this.err[0] = <Text style={{color:"red"}}>Username should not be empty</Text>;
      colors[0] = "red";
    }else if(!firebase_regex.test(this.inp["Username"])){
      this.err[0] = 
        <Text style={{color:"red"}}>Username invalid: cannot contain space . $ # [ ] /</Text>;
      colors[0] = "red";
    }else{
      this.err[0] = 
        <Text style={{color:"transparent"}}>placeholder</Text>;
    }

    if(this.inp["Password"] === ""){
      this.err[1] = <Text style={{color:"red"}}>Password may not be blank</Text>;
      colors[1] = "red";
    }else{
      this.err[1] = 
        <Text style={{color:"transparent"}}>placeholder</Text>;
    }

    if(this.inp["Password Confirmation"] !== this.inp["Password"]){
      this.err[2] = <Text style={{color:"red"}}>Password must match</Text>;
      colors[2] = "red";
    }else{
      this.err[2] = 
        <Text style={{color:"transparent"}}>placeholder</Text>;
    }

    if(colors[0] === "black" && colors[1] === "black" && colors[2] === "black"){
      
      var updates = {};
      updates['/users/' + this.inp["Username"]] = {
        "Password": this.inp["Password"]
      };
      
      firebase
          .database()
          .ref()
          .update(updates);

      this.props.navigation.navigate('Home') 
    }else{
      this.setState({
        color: colors
      });
    }
  }

  updateValue(text, type){
      this.inp[type] = text;
  }

    render() {
      return (
        <ImageBackground source={background} style={styles.backgroundcss}>
          <Image source={logo} style={styles.logocss}/>
            <CircleInput 
              style={{color: this.state.color[0]}}
              placeholder = 'Username'
              onChangeText={this.updateValue} 
            />
            {this.err[0]}
            {/* <CircleInput 
              placeholder = 'Email'
              onChangeText={this.updateValue} 
            /> */}
            <CircleInput 
              style={{color: this.state.color[1]}}
              placeholder = 'Password'
              onChangeText={this.updateValue} 
            />
            {this.err[1]}
            <CircleInput 
              style={{color: this.state.color[2]}}
              placeholder = 'Password Confirmation'
              onChangeText={this.updateValue} 
            />
            {this.err[2]}
            <CircleButton 
              name='LOGIN'
              onPress={this.signup}
            />
            <View style={styles.back}>
              <Button 
                title="< Back" 
                activeOpacity = {.75}
                style={{
                  flex: 1,
                  flexDirection:'row', 
                  flexWrap:'wrap'
                }}
                onPress={this.back}/>
            </View>
        </ImageBackground>
      );
    }
  }

const styles = StyleSheet.create({
  backgroundcss: {
    width: '100%', 
    height: '100%', 
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    backgroundColor:'#F1E5EF',
  },
  logocss: {
    width: '70%',
    height: '50%', 
    resizeMode: 'contain',
    marginBottom: '-20%',
  },
  back:{
    margin:0,
    padding: 0,
    position: "absolute",
    top: 50,
    left: 10,
    alignItems:'center',
    flex: 1,
    flexDirection:'row', 
    flexWrap:'wrap'
  }
});