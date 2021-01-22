import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import Routes from './src/route';



export default function App () {

  
  return (
    <>
    <StatusBar style="light" backgroundColor= "#000" translucent={false} />
    <Routes />
    </>
  );
}

