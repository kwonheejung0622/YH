import React from 'react';
import {View,Text,StyleSheet, ActivityIndicator} from 'react-native';

export default function Loading(){
    return(
    <View style={styles.container}>
        <ActivityIndicator size='large'/>
        <Text style={styles.title}>준비중입니다...</Text>
        </View>)
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    title: {
        padding:10,
        fontSize:20,
        fontWeight:'300'
    }

})