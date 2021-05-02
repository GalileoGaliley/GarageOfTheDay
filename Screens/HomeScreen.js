
import React, { useState, useEffect, } from "react";
import {ScrollView,FlatList, StatusBar, Image, StyleSheet, Text, TextInput, View , Button,Slider,TouchableOpacity, Dimensions, } from 'react-native';

import globalStyles from '../styles/globalStyles.js';

import FieldGoods from '../Components/FieldGoods.js'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const screen2 = Dimensions.get("screen").height / 10;
const screen3 = Dimensions.get("screen").height - screen2 * 2;


export default function HomeScreen({navigation}) {
  function Click(prop) {
      navigation.navigate(prop);
  };


  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  const [text, onChangeText] = React.useState();


  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });





  return(
    <>
        <StatusBar />
        <View style = {globalStyles.container}>
            <View style = {globalStyles.contain}>

                <View style = {globalStyles.search}>
                    <TextInput style = {globalStyles.inputSearch} onChangeText={onChangeText} value={text} placeholder="Поиск" />
                    <TouchableOpacity style = {globalStyles.image} onPress = {function() {Click('Параметры')}}>
                        <Image source={require('../Images/params.png')} style = {globalStyles.image} />
                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView style = {{height:'100%',width:'100%',marginBottom:0,}}>
                <View style={{ flex: 2, alignItems:'center', flexDirection: 'row', justifyContent:'space-between',}}>
                    <FieldGoods />
                </View>


            </ScrollView>

            <Button onPress = {function() {Click('Вход')}} title = 'Вход'/>

        </View>
    </>
);
};
