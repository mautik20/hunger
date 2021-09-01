import * as React from 'react';
import { View } from 'react-native';
import MainScreen from "./screen1";
import American from "./screen2/American";
import SouthIndian from "./screen2/SouthIndian";
import NorthIndian from "./screen2/NorthIndian";
import EastIndian from "./screen2/EastIndian";
import WestIndian from "./screen2/WestIndian";
import Punjabi from "./screen2/Punjabi";
import Chinese from "./screen2/Chinese";
import French from "./screen2/French";
import Italian from "./screen2/Italian";
import Japanese from "./screen2/Japanese";
import Moroccan from "./screen2/Moroccan";
import Spanish from "./screen2/Spanish";
import Thai from "./screen2/Thai";
import Turkish from "./screen2/Turkish";
import Indonesian from "./screen2/Indonesian";
import Scottish from "./screen2/Scottish";
import British from "./screen2/British";
import Mexican from "./screen2/Mexican";
import Swedish from "./screen2/Swedish";
import Latvian from "./screen2/Latvian";
import German from "./screen2/German";
import Hawaiian from "./screen2/Hawaiian";
import Polish from "./screen2/Polish";
import Canadian from "./screen2/Canadian";
import Russian from "./screen2/Russian";
import Greek from "./screen2/Greek";
import Cuban from "./screen2/Cuban";
import Tibetan from "./screen2/Tibetan";
import Korean from "./screen2/Korean";
import Indian from "./screen2/Indian";



import {createAppContainer, createSwitchNavigator} from "react-navigation"

export default class App extends React.Component {

  render() {
    return (
      <View>
        <AppContainer/>

      </View>
    );
  }
}



var AppNavigator=createSwitchNavigator({
  MainScreen:MainScreen,
  Indian:Indian,
  American:American,
  SouthIndian:SouthIndian,
  NorthIndian:NorthIndian,
  EastIndian:EastIndian,
  WestIndian:WestIndian,
  Punjabi:Punjabi,
  Chinese:Chinese,
  French:French,
  Italian:Italian,
  Japanese:Japanese,
  Moroccan:Moroccan,
  Spanish:Spanish,
  Thai:Thai,
  Turkish:Turkish,
  Indonesian:Indonesian,
  Scottish:Scottish,
  British:British,
  Mexican:Mexican,
  Swedish:Swedish,
  Latvian:Latvian,
  German:German,
  Hawaiian:Hawaiian,
  Polish:Polish,
  Canadian:Canadian,
  Russian:Russian,
  Greek:Greek,
  Cuban:Cuban,
  Tibetan:Tibetan,
  

 
})

const AppContainer=createAppContainer(AppNavigator)
