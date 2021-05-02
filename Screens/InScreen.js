
import React, { useState, useEffect, } from "react";
import {StatusBar,FlatList, Image, StyleSheet, Text, TextInput, View , Button, Input,Modal ,Slider,TouchableOpacity, Dimensions} from 'react-native';
import globalStyles from '../styles/globalStyles.js';
import RegScreen from './RegScreen.js';




export default function InScreen() {


  const [modalVisible, setModalVisible] = useState(false);

  const [name, onChangeText] = React.useState();
  const [password, onChangeText1] = React.useState();


  function Click() {
      fetch('http://45.141.76.97:3000/',{
        method: 'POST',
        body: JSON.stringify({
          name: name,
          pass: password,

        }),
        headers: {"Content-Type": "application/json"}
      })

    };

  return(
    <>

      <View style = {globalStyles.container}>

          <View style = {globalStyles.regWind}>

              <TextInput style = {globalStyles.inputReg} onChangeText={onChangeText} value={name} keyboardType="email-address" placeholder="E-mail" />
              <TextInput style = {globalStyles.inputReg} onChangeText={onChangeText1} value={password} keyboardType="phone-pad" placeholder="Пароль" />
              <TouchableOpacity onPress={() => setModalVisible(true)} >
                  <Text>Регистрация?</Text>
              </TouchableOpacity>

          </View>

          <Button title = 'Войти' style = {globalStyles.regButt} onPress = {Click} />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <RegScreen />
          <TouchableOpacity style = {{width:100,height:60,bottom:40,borderRadius:5,backgroundColor:'rgb(112, 162, 219)',justifyContent:'center',alignItems:'center'}} onPress={() => setModalVisible(!modalVisible)} >
                <Text style = {{fontSize:25,color:'#fff',}}>Отправить</Text>
          </TouchableOpacity>
      </Modal>
    </>
);
}
