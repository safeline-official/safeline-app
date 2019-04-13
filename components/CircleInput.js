import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

 
export default class CircleInput extends Component {
  render() {
    return (
       <TouchableOpacity
          style = {
            styles.SubmitButtonStyle
          }
          activeOpacity = { 
            .75 
          }
       >
        <TextInput 
          placeholder = {this.props.placeholder}
          onChangeText={(text) => this.props.onChangeText(text, this.props.placeholder)}
          style = {styles.TextStyle}
        />
      </TouchableOpacity>
    );
  }
}
 
const styles = StyleSheet.create({
  SubmitButtonStyle: {
    width: '90%',
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#FCFCF4',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FCFCF4',
  },
  TextStyle:{
      color:'black',
      textAlign:'center',
  }
});