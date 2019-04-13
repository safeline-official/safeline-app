import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, ImageBackground, Image, TextInput} from 'react-native';
import Carousel from '../components/Carousel'
import Box from '../components/Box'
import background from '../images/Fluorescent-Gradient-Final.jpg';
// import blue_background from '../images/blue_background.jpeg';
import AsyncStorage from '@react-native-community/async-storage/lib/AsyncStorage';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header : null
  }

  constructor(props){
    super(props);
    this.removeValue = this.removeValue.bind(this);
  }

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@username');
      this.props.navigation.navigate('Login');
    } catch(e) {
      // remove error
    }
  }

  render = () => {
    return (
      <ImageBackground disabled={false} source={background} style={styles.viewcss} color="#841584">
        
        <View style={styles.boxes}> 
          <Box />
          <Box />
          <Box />
          <Box />
        </View> 
        <View style={styles.logout}>
          <Button 
            title="Logout" 
            activeOpacity = {.75}
            style={{
              flex: 1,
              flexDirection:'row', 
              flexWrap:'wrap'
            }}
            onPress={this.removeValue}/>
        </View>
        <View style={{alignItems: 'center', top:-40}}>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: 100,
              bottom: 20
            }}
          />
          <Text style={{fontSize: 40, fontWeight: '100'}}>Recent Falls</Text>
        </View>
        
        <Carousel style={{flex: 1}}/>

      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  viewcss: {
    alignItems: 'center',
    height: '100%',
  },
  boxes: {
    flex: 1, 
    flexDirection:'row', 
    alignItems:'center', 
    flexWrap:'wrap', 
    alignContent:'center', 
    justifyContent:'center', 
  },
  logout:{
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