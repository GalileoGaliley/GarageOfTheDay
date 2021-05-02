import React, { useState, useEffect, } from "react";
import {ScrollView,FlatList, StatusBar, Image, StyleSheet, Text, TextInput, View , Button,Slider,TouchableOpacity, Dimensions, } from 'react-native';



export default function RadioButton(props) {
  return (
      <View style={[{ height: 24, width: 24, borderRadius: 12, borderWidth: 2, borderColor: '#000',opacity:0.5, alignItems: 'center', justifyContent: 'center',}, props.style]}>{props.selected ?
        <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#000',opacity:0.5}}/>: null}
      </View>
  );
}
