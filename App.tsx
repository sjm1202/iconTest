/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import CustonIcon from './commons/custonIcon';
import {
  Text,
  View,
} from 'react-native';


 const App = () => {
  return (
    <View style={{paddingTop: 100}}>
      <CustonIcon name="aixin" size={50} color="#900"/>
      <CustonIcon name="bianji" size={50}/>
      <CustonIcon name="chabei" size={50}/>
      <CustonIcon name="fasong" size={50}/>
      <CustonIcon name="dianzan" size={50}/>
      <CustonIcon name="faxian" size={50}/>
      <CustonIcon name="gouwuche" size={50}/>
      <CustonIcon name="huojian" size={50}/>
      <CustonIcon name="jiangbei" size={50}/>
    </View>
  );
};

export default App;
