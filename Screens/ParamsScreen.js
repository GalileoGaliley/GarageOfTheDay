
import React, { useState, useEffect} from "react";
import {StatusBar,Modal, Image, StyleSheet, Text, TextInput, View , Button,Slider,TouchableOpacity, Dimensions,Pressable} from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import globalStyles from '../styles/globalStyles.js';
import RadioGroupCategory from '../Components/RadioGroupCategory.js'



export default function ParamsScreen() {

function updateData(value){
    return(value)
}
let vvv = updateData();


  return(
    <>
    <StatusBar />
      <View style = {globalStyles.container}>
        <RadioGroupCategory updateData = {updateData} style = {{alignItems:'center'}} styleText = {{fontSize:25,marginLeft:10,color:'rgb(74, 74, 74)'}} />

      </View>
    </>
);
};
