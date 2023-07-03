import React from 'react'
import {View, Text,StyleSheet,Image} from 'react-native'
import aboutImage from "../assets/MSmainpic.jpg"

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`)


export default function HomeScreen(){
     
  return (
    <View style={styles.container}>
        <Text style={styles.title}>영화 식당 메뉴</Text>
       
        <View style={styles.textContainer}>
            <Image style={styles.aboutImage} source={aboutImage} resizeMode={"cover"}/>
            <Text style={styles.desc01}>정성들인 밥과 반찬을 담아내려 노력했습니다!</Text>
            <Text style={styles.desc02}>감사합니다.</Text>
        </View>

            
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#eee",
        alignItems:"center",
        paddingTop : statusBarHeight,
        paddingBottom : bottomSpace    
    },
    title: {
        fontSize:30,
        fontWeight:"700",
        color:"#000",
        paddingLeft:30,
        paddingRight:30
    },
    textContainer: {
        margin:30,
        padding:20,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:200,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        padding:22,

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:15
    }
})