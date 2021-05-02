import React, { useState, useEffect} from "react";
import {StatusBar,Modal, Image, StyleSheet, Text, TextInput, View , Button,Slider,TouchableOpacity, Dimensions,Pressable} from 'react-native';

import globalStyles from '../styles/globalStyles.js';

import RadioButton from '../Components/RadioButton.js';




export default function RadioGroupCategory(props) {

  function titles() {
      if(props.updateData(a)){
          return(props.updateData(a))
      }else {
        return(<Text style = {{fontSize:25,marginLeft:10,color:'rgb(150,150,150)',}}>Выберите категорию</Text>)
      }
  }

  const [text, onChangeText] = React.useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [chack, setChack] = useState(false);
  const [txt, setTxt] = useState();


  const [select1,setSelect1] = useState(false);
  const [select2,setSelect2] = useState(false);
  const [select3,setSelect3] = useState(false);
  const [select4,setSelect4] = useState(false);
  const [select5,setSelect5] = useState(false);
  const [select6,setSelect6] = useState(false);
  let a;

  switch (true) {
    case select1:
      a = 'Мука'
      break;

    case select2:
      a = 'Зерно'
      break;

    case select3:
      a = 'Домашний скот'
      break;

    case select4:
      a = 'Техника'
      break;

    case select5:
      a = 'Ручной инструмент'
      break;

    case select6:
      a = 'Земельные участки'
      break;
    default:

  }

  function Fitch() {
    if (true){
      fetch('http://45.141.76.97:3000/',{
        method: 'POST',
        body: JSON.stringify({
          config:titles(),

        }),
        headers: {"Content-Type": "application/json"}
      })
    }

  }
  return(
    <>
    <View style = {globalStyles.container}>
        <View style = {{width:'100%'}}>
            <TouchableOpacity style = {{width:'100%',borderColor:'#aaa',marginTop:10,marginBottom:10,height:60,justifyContent:'center',backgroundColor:'#fff'}} onPress={() => setModalVisible(true)}  >
                <Text style = {{fontSize:25,marginLeft:10,color:'rgb(74, 74, 74)'}}>{titles()}</Text>
            </TouchableOpacity>
        </View>
        <Button onPress = {Fitch} title = 'Кнопка'/>
    </View>


    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style = {{height:'100%',width:'100%', backgroundColor:'rgba(40, 40, 40, 0.8)',alignItems:'center',justifyContent:'center'}} onPress={() => setModalVisible(!modalVisible)}>
          <View style = {{height:'80%',width:'80%',backgroundColor:'#fff',alignItems:'center', justifyContent:'center'}}>
          <View style = {{height:'100%',width:'100%',justifyContent:'flex-start',alignItems:'flex-start',marginLeft:40}}>
            <View>
            <TouchableOpacity style = {[{marginTop:40,flexDirection:'row'},props.style]} onPress = {function(){setSelect1(!select1);   setSelect2(false);setSelect3(false);setSelect4(false);setSelect5(false);setSelect6(false);}}>
                <RadioButton  selected = {select1}/>
                <Text style = {props.styleText} >Мука</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[{marginTop:40,flexDirection:'row'},props.style]} onPress = {function(){setSelect2(!select2);   setSelect1(false);setSelect3(false);setSelect4(false);setSelect5(false);setSelect6(false);}}>
                <RadioButton  selected = {select2}/>
                <Text style = {props.styleText} >Зерно</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[{marginTop:40,flexDirection:'row'},props.style]}  onPress = {function(){setSelect3(!select3);   setSelect2(false);setSelect1(false);setSelect4(false);setSelect5(false);setSelect6(false);}}>
                <RadioButton  selected = {select3}/>
                <Text style = {props.styleText} >Домашний скот</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[{marginTop:40,flexDirection:'row'},props.style]} onPress = {function(){setSelect4(!select4);   setSelect2(false);setSelect3(false);setSelect1(false);setSelect5(false);setSelect6(false);}}>
                <RadioButton  selected = {select4}/>
                <Text style = {props.styleText} >Техника</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[{marginTop:40,flexDirection:'row'},props.style]}  onPress = {function(){setSelect5(!select5);   setSelect2(false);setSelect3(false);setSelect4(false);setSelect1(false);setSelect6(false);}}>
                <RadioButton  selected = {select5}/>
                <Text style = {props.styleText} >Ручной инструмент</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[{marginTop:40,flexDirection:'row'},props.style]} onPress = {function(){setSelect6(!select6);   setSelect2(false);setSelect3(false);setSelect4(false);setSelect5(false);setSelect1(false);}}>
                <RadioButton  selected = {select6}/>
                <Text style = {props.styleText} >Земельные участки</Text>
            </TouchableOpacity>
            <Text></Text>
            </View>
          </View>
              <TouchableOpacity style = {{width:100,height:60,bottom:40,borderRadius:5,backgroundColor:'rgb(112, 162, 219)',justifyContent:'center',alignItems:'center'}} onPress={() => setModalVisible(!modalVisible)} >
                    <Text style = {{fontSize:25,color:'#fff',}}>Выбрать</Text>
              </TouchableOpacity>

          </View>
      </View>
    </Modal>
    </>
  )

}
