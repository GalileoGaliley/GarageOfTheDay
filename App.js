import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View , Button, Input} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import HomeScreen from './Screens/HomeScreen.js';
import ParamsScreen from './Screens/ParamsScreen.js';
import InScreen from './Screens/InScreen.js';



const screens = {

    Главная:{
      screen: HomeScreen,
      navigationOptions: {
              header: null,
          },
    },
    Параметры: {
      screen: ParamsScreen
    },
    Вход:{
      screen: InScreen
    },


};

const Stack = createStackNavigator(screens);

const Nav = createAppContainer(Stack);


export default function App() {


  return (
    <>
        <Nav />

    </>
  );
};
      // const styles = StyleSheet.create({
      //     header:{
      //       height:'0.4%',
      //       width:'100%'
      //     }
      // })
