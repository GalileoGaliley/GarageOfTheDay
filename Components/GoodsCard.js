import React, { useState, useEffect, } from "react";
import {StatusBar, Image, StyleSheet, Text, TextInput, View , Button, Input ,Slider,TouchableOpacity, Dimensions} from 'react-native';
import globalStyles from '../styles/globalStyles.js';

export default function GoodsCard(props) {
  return(

        <View style = {props.st}>
            <View style = {{height:'70%'}}>
                <Image source={props.surs} style = {globalStyles.imageGoods} />
            </View>
            <View style = {{justifyContent:'flex-start',alignItems:'flex-start', height:'30%',}} >
                <Text style = {{fontWeight:'bold',fontSize:17,margin:5}}>{props.title}</Text>
                <Text style = {{fontWeight:'bold',fontSize:17,margin:5,marginTop:0,marginBottom:0
              }}>{props.price}</Text>
                <Text style = {{fontWeight:'bold',fontSize:13,color:'#333',margin:5}}>{props.map}</Text>
            </View>

        </View>

  )
}
