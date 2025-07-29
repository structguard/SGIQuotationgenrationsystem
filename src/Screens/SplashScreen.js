import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { AppConstant } from '../AppConstant';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Addbottom');
    }, 2000);
  }, []);
  return (
    <>
      <StatusBar animated={true} backgroundColor={AppConstant.Appcolor} />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: AppConstant.Appcolor }}>

          <View style={{ justifyContent: "center", alignItems: "center" }}>

            <Image source={require('../Images/9422795.png')} style={{ height: 200, width: 200, }} />
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>Welcome To</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>SAWKAR APPLICATION</Text>

          </View>





        </View>
      </SafeAreaView>
    </>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})