import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList,Text, TouchableOpacity, Image, Dimensions } from 'react-native'
// import { Text, FAB, List } from 'react-native-paper'

import Header from '../components/Header'
import { PanoramaView } from "@lightbase/react-native-panorama-view";

function Home({ navigation }) {

  return (
  <View style={styles.container}>
       {/* <Header titleText={'Restaurants List'}/> */}
       <PanoramaView
    style={{ flex: 1 }}
    dimensions={{
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width
    }}
    inputType="mono"
    imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // paddingHorizontal: 10,
    // paddingVertical: 20
  }
})

export default Home
