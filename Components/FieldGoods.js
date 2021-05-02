
import React, { useState, useEffect, } from "react";
import {ScrollView,FlatList, StatusBar, Image, StyleSheet, Text, TextInput, View , Button, Input,Slider,TouchableOpacity, Dimensions} from 'react-native';

import globalStyles from '../styles/globalStyles.js';

import GoodsCard from '../Components/GoodsCard.js'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const screenHeight = screen.height;
const screenWidth = screen.width;

const screen5Width = screenWidth / 20;
const screen5Height = screenHeight / 20;


let images1 = require('../Images/combine1.jpg');
let images2 = require('../Images/combine2.jpg');
let images3 = require('../Images/combine3.jpg');

const data= [
    {price: '25 000',map:'село Мудёновка, дом 666',aaaa:'Продам комбайн',surs:images1},
    {price: '35 000',map:'село Мудёновка, дом 666',aaaa:'Продам .comбайн',surs:images2},
    {price: '2 500',map:'село Мудёновка, дом 666',aaaa:'Продам комбine',surs:images3},
    {price: '0.00025',map:'село Мудёновка, дом 666',aaaa:'Продам ком6айн',surs:images2},
    {price: '25 000',map:'село Мудёновка, дом 666',aaaa:'Продам комбаeн',surs:images1},
    {price: '25 000',map:'село Мудёновка, дом 666',aaaa:'Продам комбаeн',surs:images1},
  ];

    const column1Data = data.filter((item, i) => i%2 === 0);
    const column2Data = data.filter((item, i) => i%2 === 1);







export default function FieldGoods (props) {

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

  switch (true) {
    case dimensions.screen.width<=360:
    return(
        <>
            <View style = {{flex: 2, alignItems:'center', flexDirection: 'row', justifyContent:'center',}}>
                <FlatList data = {column1Data}
                  renderItem={({item}) =>  <GoodsCard map = {item.map} price = {item.price} title = {item.aaaa} surs = {item.surs} st = {{ margin:5,top:75, backgroundColor:'#fff', borderRadius:5, width: '95%', height:screen5Height * 6, shadowColor: 'black', shadowOpacity: 0.9, elevation: 5,}} />}
                />
                <FlatList data = {column2Data}
                  renderItem={({item}) =>  <GoodsCard map = {item.map} price = {item.price} title = {item.aaaa} surs = {item.surs} st = {{ margin:5,top:75, backgroundColor:'#fff', borderRadius:5, width: '95%', height:screen5Height * 6, shadowColor: 'black', shadowOpacity: 0.9, elevation: 5,}} />}
                />
            </View>
        </>
    )
      break;
      case dimensions.screen.width>360:
      return(
        <>
            <View style = {{flex: 1, alignItems:'center', flexDirection: 'row', justifyContent:'space-between',}}>
                <FlatList data = {column1Data}
                  renderItem={({item}) =>  <GoodsCard map = {item.map} price = {item.price} title = {item.aaaa} surs = {item.surs} st = {{ margin:5,top:30, backgroundColor:'#fff', borderRadius:5, width: '95%' , height:screen5Width * 13, shadowColor: 'black', shadowOpacity: 0.9, elevation: 5,}} />}
                />
                <FlatList data = {column2Data}
                  renderItem={({item}) =>  <GoodsCard map = {item.map} price = {item.price} title = {item.aaaa} surs = {item.surs} st = {{ margin:5,top:30, backgroundColor:'#fff', borderRadius:5, width: '95%' , height:screen5Width * 13, shadowColor: 'black', shadowOpacity: 0.9, elevation: 5,}} />}
                />


            </View>
        </>

      )
        break;

      }


  }
