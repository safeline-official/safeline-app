import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styled from "styled-components/native";



export default class CarouselL extends Component {
    constructor(props){
        super();
        this.state = {
            errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
    }

  init(){
    this.state = {
      videos: [
        {
          image: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
        }, 
        {
          image: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
        }, 
        {
          image: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
        }
      ],
      activeSlide: 0
    };
  }

  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={this.state.videos.length}
          activeDotIndex={activeSlide}
          dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 2,
              marginHorizontal: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
          carouselRef={this._carousel}
        />
    );
}

  _renderItem = ( {item, index } ) => {
    return (
        <View style={styles.backgroundview}>
          <TouchableOpacity>
            <Image 
                style={styles.currentimage}
                source={{ uri: item.image }} 
            />
          </TouchableOpacity>
        </View>
    );
  }

  render = () => {
    return (
      <View 
        style={styles.carouselbackgroundview}>
        <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.videos}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={360}
          itemWidth={320}
          layout={'default'}
          firstItem={1}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        { this.pagination }
      </View>
    );
  }
}



const styles = StyleSheet.create({
    carouselbackgroundview: {
        height: 250,
        width: '100%',
    },
    backgroundview: {
        height: 250,
        width: '100%',
    },
    currentimage: {
        width: 330,
        height: 186,
        borderRadius: 10,
    },
});
