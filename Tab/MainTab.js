import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CalendarScreen from '../screens/CalendarScreen';
import HomeScreen from '../screens/HomeScreen.js';
import TodayMenuScreen from '../screens/TodayMenuScreen';

import Icon from 'react-native-vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="TodayMenuScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#009688',
      }}>
     <Tab.Screen name="HomeScreen" component={HomeScreen} options={{title: '홈', tabBarIcon:({color})=><Icon name="home" color={color} size={24} />,}}/> 
     <Tab.Screen name="TodayMenuScreen" component={TodayMenuScreen} options={{title: '오늘의 메뉴', tabBarIcon:({color})=><MaterialIcons name="restaurant-menu" size={24} color={color} />,}}/> 
     <Tab.Screen name="CalendarScreen" component={CalendarScreen} options={{tabBarIcon:({color})=><Icon name="isv" color={color} size={24} />,}}/>

    </Tab.Navigator>
      );
    }

    export default MainTab;