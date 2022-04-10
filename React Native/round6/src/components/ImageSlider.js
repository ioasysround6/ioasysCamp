import React from "react";
import { colors } from '../styles/colors';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Shadow } from 'react-native-shadow-2';

var width = Dimensions.get('window').width;

export function ImageSlider({ imagesUrl }){
  return(
    <View style={styles.container}>

      <SwiperFlatList
        index={0}
        paginationStyleItemActive={styles.dotActive}
        paginationStyleItemInactive={styles.dotInactive}
        showPagination
        data={imagesUrl}
        renderItem={({ item }) => (
          <View style={styles.imagewrapper}>
            <Shadow
              distance={20} 
              startColor={'#252A2733'} 
              offset={[0, 2]}
            >
              <Image 
                style={styles.image} 
                source={{uri: item}}
              />
              
            </Shadow>
          </View>
        )}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: colors.neutralLighter,
  },
  dotActive: {
    width: 6,
    height: 6,
    backgroundColor: colors.neutralLighter
  },
  dotInactive: {
    width: 6,
    height: 6,
    backgroundColor: 'transparent',
    borderColor: colors.neutralLighter,
    borderWidth: 1
  },
  imagewrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: width,
    height: 420,
  }
})