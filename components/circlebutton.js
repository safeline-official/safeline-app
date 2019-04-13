import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
export default class CircleButton extends Component {
  render() {
    return (
       <TouchableOpacity
          style = {
            styles.SubmitButtonStyle
          }
          activeOpacity = { 
            .75 
          }
          onPress = { 
            this.props.onPress
          }
       >
        <Text style = {styles.TextStyle}>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
 
const styles = StyleSheet.create({
  SubmitButtonStyle: {
    width: '80%',
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#352ABF',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#352ABF',
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  }
});