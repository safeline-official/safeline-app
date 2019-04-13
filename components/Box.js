import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import blue_background from '../images/blue_background.jpeg';



export default class BlueBox extends Component {
    render = () => {
      return(
        <TouchableOpacity style={styles.bluebox}> 
            <Text style={styles.text}></Text>
        </TouchableOpacity>
      );
    }
  }


const styles = StyleSheet.create({
    bluebox: {
        alignItems: 'center',
        width: 160,
        height: 160,
        borderRadius: 10,
        backgroundColor: '#464646',
        marginBottom: 6,
        marginRight: 3,
        marginLeft: 3,
    },
    text: {
        position: 'absolute', 
        textAlign: 'center', 
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '100',
    }
});