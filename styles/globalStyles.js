import {StyleSheet, Dimensions} from 'react-native';
import React, { useState, useEffect} from "react";


const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const screen5Width = screenWidth / 20;
const screen5Height = screenHeight / 20;

const globalStyles = StyleSheet.create({

  container:{
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      height:'100%',
      backgroundColor:'#eee',

  },
  contain: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'row',
      width:'100%',
      height:'15%',
      position:'absolute',
      zIndex:2,
      top:2,
      shadowColor: 'black',
      shadowOpacity: 0.9,
      elevation: 2,
      alignItems:'center',
      margin:'auto'

  },
  goodsCardMini:{
      margin:5,
      backgroundColor:'#fff',
      borderRadius:5,
      width: '95%',
      height:screen5Height * 8,
      shadowColor: 'black',
      shadowOpacity: 0.9,
      elevation: 5,
  },
  goodsCardMaxi:{
      margin:5,
      backgroundColor:'#fff',
      borderRadius:5,
      width: '95%' ,
      height:screen5Width * 13,
      shadowColor: 'black',
      shadowOpacity: 0.9,
      elevation: 5,
  },
  text:{
      alignItems: 'center',
  },
  regButt:{
      position:'absolute',
      bottom:100
  },
  cont: {
      color: '#f11'
  },
  regWind:{
      width:'100%',
      height:'60%',
      justifyContent:'center',
      alignItems:'center',


  },
  inputSearch:{
      width:'83%',
      fontSize:25,
      color:'#333',
      paddingStart:10
  },
  inputSearch1:{
      width:'83%',
      fontSize:25,
      color:'#333',
      paddingStart:10
  },
  imageGoods:{
      marginTop:5,
      height:'99%',
      width:'100%'

  },
  inputReg:{
      width:'80%',
      height:45,
      fontSize:25,
      color:'#333',
      paddingStart:10,
      borderColor: '#1a9',
      borderRadius:10,
      borderWidth:1,
      marginTop:10,
      backgroundColor:'#fff'
  },
  textReg:{
      fontSize:20
  },
  search:{
      marginTop:20,
      borderColor: '#1a9',
      borderRadius:10,
      borderWidth:1,
      width:'90%',
      flexDirection:'row',
      position: 'absolute',
      right: 10,
  },
  image:{
      width:45,
      height:45,

  },
  imageLogo:{
      height: 50,
      width:50,

  }

});
export default globalStyles;
