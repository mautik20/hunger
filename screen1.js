import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

export default class HomeScreen extends React.Component{

constructor(){
  super();
  
}
  goToAmerican=()=>{
    this.props.navigation.navigate("American")
  }

 goToSouthIndian=()=>{
    this.props.navigation.navigate("SouthIndian")
  }

 goToNorthIndian=()=>{
    this.props.navigation.navigate("NorthIndian")
  } 
  
  goToEastIndian=()=>{
    this.props.navigation.navigate("EastIndian")
  }  

 goToWestIndian=()=>{
    this.props.navigation.navigate("WestIndian")
  }  
 
 goToPunjabi=()=>{
    this.props.navigation.navigate("Punjabi")
  }

 goToChinese=()=>{
    this.props.navigation.navigate("Chinese")
  } 
  
  goToFrench=()=>{
    this.props.navigation.navigate("French")
  }  

 goToItalian=()=>{
    this.props.navigation.navigate("Italian")
  }

   goToJapanese=()=>{
    this.props.navigation.navigate("Japanese")
  }

 goToMoroccan=()=>{
    this.props.navigation.navigate("Moroccan")
  }

 goToSpanish=()=>{
    this.props.navigation.navigate("Spanish")
  } 
  
  goToThai=()=>{
    this.props.navigation.navigate("Thai")
  }  

 goToTurkish=()=>{
    this.props.navigation.navigate("Turkish")
  }

   goToIndonesian=()=>{
    this.props.navigation.navigate("Indonesian")
  }

 goToScottish=()=>{
    this.props.navigation.navigate("Scottish")
  }

 goToBritish=()=>{
    this.props.navigation.navigate("British")
  } 
  
  goToMexican=()=>{
    this.props.navigation.navigate("Mexican")
  }  

 goToSwedish=()=>{
    this.props.navigation.navigate("Swedish")
  }

   goToLatvian=()=>{
    this.props.navigation.navigate("Latvian")
  }

 goToGerman=()=>{
    this.props.navigation.navigate("German")
  }

 goToHawaiian=()=>{
    this.props.navigation.navigate("Hawaiian")
  } 
  
  goToPolish=()=>{
    this.props.navigation.navigate("Polish")
  }  

 goToCanadian=()=>{
    this.props.navigation.navigate("Canadian")
  }

   goToRussian=()=>{
    this.props.navigation.navigate("Russian")
  }

 goToGreek=()=>{
    this.props.navigation.navigate("Greek")
  }

 goToCuban=()=>{
    this.props.navigation.navigate("Cuban")
  } 
  
  goToTibetan=()=>{
    this.props.navigation.navigate("Tibetan")
  }  

 goToKorean=()=>{
    this.props.navigation.navigate("Korean")
  }

  goToIndian=()=>{
    this.props.navigation.navigate("Indian")
  }

  

  render(){
    return(
 
      <View>

      <TouchableOpacity style={[styles.button,{backgroundColor:"blue",marginTop:50,}]}
      onPress={()=>{
        this.goToIndian() }}>
 
      <Text style={styles.buttonText}> Indian</Text>
      </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{backgroundColor:"green",marginTop:10}]}
            onPress={()=>{
        this.goToSouthIndian()
      }}>
      <Text style={styles.buttonText}> South_Indian</Text>
      </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{backgroundColor:"yellow",marginTop:10}]}
            onPress={()=>{
        this.goToNorthIndian()
      }}>
      <Text style={styles.buttonText2}> North_Indian</Text>
      </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{backgroundColor:"red",marginTop:10}]}
            onPress={()=>{
        this.goToEastIndian()
      }}>
      <Text style={styles.buttonText}> East_Indian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"pink",marginTop:10}]}
            onPress={()=>{
        this.goToWestIndian()
      }}>
      <Text style={styles.buttonText}> West_Indian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"orange",marginTop:10}]}
            onPress={()=>{
        this.goToPunjabi()
      }}>
      <Text style={styles.buttonText}> Punjabi</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"lightblue",marginTop:10}]}
            onPress={()=>{
        this.goToChinese()
      }}>
      <Text style={styles.buttonText}> Chinese</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"cyan",marginTop:10}]}
            onPress={()=>{
        this.goToFrench()
      }}>
      <Text style={styles.buttonText}> French</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"purple",marginTop:10}]}
            onPress={()=>{
        this.goToItalian()
      }}>
      <Text style={styles.buttonText}> Italian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"wheat",marginTop:10}]}
            onPress={()=>{
        this.goToJapanese()
      }}>
      <Text style={styles.buttonText}> Japanese</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"blue",marginTop:10}]}
            onPress={()=>{
        this.goToMoroccan()
      }}>
      <Text style={styles.buttonText}> Moroccan</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"green",marginTop:10}]}
            onPress={()=>{
        this.goToSpanish()
      }}>
      <Text style={styles.buttonText}> Spanish</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"yellow",marginTop:10}]}
            onPress={()=>{
        this.goToThai()
      }}>
      <Text style={styles.buttonText2}> Thai</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"red",marginTop:10}]}
            onPress={()=>{
        this.goToTurkish()
      }}>
      <Text style={styles.buttonText}> Turkish</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"pink",marginTop:10}]}
            onPress={()=>{
        this.goToIndonesian()
      }}>
      <Text style={styles.buttonText}> Indonesian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"orange",marginTop:10}]}
            onPress={()=>{
        this.goToScottish()
      }}>
      <Text style={styles.buttonText}> Scottish</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"lightblue",marginTop:10}]}
            onPress={()=>{
        this.goToBritish()
      }}>
      <Text style={styles.buttonText}> British</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"cyan",marginTop:10}]}
            onPress={()=>{
        this.goToAmerican()
      }}>
      <Text style={styles.buttonText}> American</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"purple",marginTop:10}]}
            onPress={()=>{
        this.goToMexican()
      }}>
      <Text style={styles.buttonText}> Mexican</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"wheat",marginTop:10}]}
            onPress={()=>{
        this.goToSwedish()
      }}>
      <Text style={styles.buttonText}> Swedish</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"blue",marginTop:10}]}
            onPress={()=>{
        this.goToLatvian()
      }}>
      <Text style={styles.buttonText}> Latvian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"green",marginTop:10}]}
            onPress={()=>{
        this.goToGerman()
      }}>
      <Text style={styles.buttonText}> German</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"yellow",marginTop:10}]}
            onPress={()=>{
        this.goToHawaiian()
      }}>
      <Text style={styles.buttonText2}> Hawaiian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"red",marginTop:10}]}
            onPress={()=>{
        this.goToPolish()
      }}>
      <Text style={styles.buttonText}> Polish</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"pink",marginTop:10}]}
            onPress={()=>{
        this.goToCanadian()
      }}>
      <Text style={styles.buttonText}> Canadian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"orange",marginTop:10}]}
            onPress={()=>{
        this.goToRussian()
      }}>
      <Text style={styles.buttonText}> Russian</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"lightblue",marginTop:10}]}
            onPress={()=>{
        this.goToGreek()
      }}>
      <Text style={styles.buttonText}> Greek</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"cyan",marginTop:10}]}
            onPress={()=>{
        this.goToCuban()
      }}>
      <Text style={styles.buttonText}> Cuban</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"purple",marginTop:10}]}
            onPress={()=>{
        this.goToTibetan()
      }}>
      <Text style={styles.buttonText}> Tibetan</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button,{backgroundColor:"wheat",marginTop:10}]}
            onPress={()=>{
        this.goToKorean()
      }}>
      <Text style={styles.buttonText}> Korean</Text>
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

   buttonText2 : { 
   textAlign : 'center', 
   color : 'orange', 
   fontSize:18},
   
    })

    


   



