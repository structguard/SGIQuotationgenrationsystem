import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import Customerscreen from '../Screens/Customerscreen';
import Addbottom from './Addbottom';
import Customerdetails from '../Screens/Customerdetails';
import Calculator from '../Screens/Calculator';


const Nav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splashscreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Addbottom" component={Addbottom} options={{ headerShown: false }} />

        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Customerscreen" component={Customerscreen} />
        <Stack.Screen name="Calculator" component={Calculator} /> */}


        <Stack.Screen name="Customerdetails" component={Customerdetails} />



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav

const styles = StyleSheet.create({})