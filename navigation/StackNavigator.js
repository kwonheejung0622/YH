import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';

import CalendarScreen from '../screens/CalendarScreen';
import HomeScreen from '../screens/HomeScreen';
import TodayMenuScreen from '../screens/TodayMenuScreen';

import MainTab from '../Tab/MainTab';

const Stack = createStackNavigator();

const StackNavigator = () =>{
    return (
        
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "white",
                borderBottomColor: "white",
                shadowColor: "white",
                height:100
            },
            //헤더의 텍스트를 왼쪾에 둘지 가운데에 둘지를 결정
            headerTitleAlign:'left',
            headerTintColor: "#000",
            headerBackTitleVisible: false
        }}
    >
            <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}} />
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="TodayMenuScreen" component={TodayMenuScreen}/>
            <Stack.Screen name="CalendarScreen" component={CalendarScreen}/>

        </Stack.Navigator>

    )
}  

export default StackNavigator;


