
import React, { useState, useEffect, } from "react";
import {StatusBar,FlatList, Image, StyleSheet, Text, TextInput, View , Button, Input ,Slider,TouchableOpacity, Dimensions} from 'react-native';
import globalStyles from '../styles/globalStyles.js';




export default function RegScreen() {



  const [name, onChangeText] = React.useState();
  const [number, onChangeText1] = React.useState();
  const [email, onChangeText2] = React.useState();

  function Click() {
      fetch('http://45.141.76.97:3000/',{
        method: 'POST',
        body: JSON.stringify({
          name: name,
          num: number,
          email: email,
        }),
        headers: {"Content-Type": "application/json"}
      })

    };

  return(
    <>

      <View style = {globalStyles.container}>

          <View style = {globalStyles.regWind}>

              <TextInput style = {globalStyles.inputReg} onChangeText={onChangeText} autoFocus = {true} value={name} placeholder="Ваше имя" />
              <TextInput style = {globalStyles.inputReg} onChangeText={onChangeText1} value={number} keyboardType="phone-pad" placeholder="Номер телефона" />
              <TextInput style = {globalStyles.inputReg} onChangeText={onChangeText2} value={email} keyboardType="email-address" placeholder="E-mail" />

          </View>

          <Button title = 'Артём верни косарь' style = {globalStyles.regButt} onPress = {Click} />
      </View>
    </>
);
}
