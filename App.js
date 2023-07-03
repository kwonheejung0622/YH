import React from 'react';

//메인에 세팅할 네비게이션 도구들을 가져옵니다.
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'



export default function App() {
  console.disableYellowBox = true;

  return (
  <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
  )
};
