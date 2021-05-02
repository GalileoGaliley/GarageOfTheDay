import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    width:'100%',
    height: '100%'

  },
  text:{
    alignItems: 'center',

  },
  cont: {
      color: '#f11'
  },
  input:{
        width:'83%',
        fontSize:25,
        color:'#333',
        paddingStart:10
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
export default styles;
