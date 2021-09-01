import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

export default class HomeScreen extends React.Component{

constructor(){
  super();
  
}
  goToJokesScreen=()=>{
    this.props.navigation.navigate("JokesScreen")
  }

 goToHoroscopeScreen=()=>{
    this.props.navigation.navigate("HoroscopeScreen")
  }

 goToWheaterScreen=()=>{
    this.props.navigation.navigate("WheaterScreen")
  } 
  
  render(){
    return(
 
      <View>

      <TouchableOpacity style={[styles.button,{backgroundColor:"lightblue",marginTop:50,}]}
      onPress={()=>{
        this.goToJokesScreen() }}>
 
      <Text style={styles.buttonText}> Snacks</Text>
      </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{backgroundColor:"lightblue",marginTop:10}]}
            onPress={()=>{
        this.goToHoroscopeScreen()
      }}>
      <Text style={styles.buttonText}> Main_Course</Text>
      </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{backgroundColor:"lightblue",marginTop:10}]}
            onPress={()=>{
        this.goToWheaterScreen()
      }}>
      <Text style={styles.buttonText}> Desert</Text>
      </TouchableOpacity>

           

      </View>
    )
  }

}
const styles = StyleSheet.create({
   button:{
   justifyContent : 'center',
   alignSelf : 'center', 
   borderWidth : 2,
   borderRadius : 15, 
   marginTop:150,
   width : 200, 
   height:50, 
   backgroundColor:'green' 
   },
   buttonText : { 
    textAlign : 'center', 
    color : 'white', 
    fontSize:18},
    })

    


   



