import React, {useState, useEffect} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import dayjs from "dayjs";


import Card from '../components/Card'
import {firebase_db} from "../firebaseConfig"
import Loading from '../components/Loading'

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`)



export default function TodayMenuScreen({navigation}){
     
    const [state,setState] = useState([])
    const [todayMenu, setTodayMenu] = useState([]);

    const [ready,setReady] = useState(true) 

    useEffect(()=>{
        navigation.setOptions({
          title:'오늘의 메뉴'
        })  
            //뒤의 1000 숫자는 1초를 뜻함
        //1초 뒤에 실행되는 코드들이 담겨 있는 함수
        setTimeout(()=>{
            firebase_db.ref('/tip').once('value').then((snapshot) => {
              console.log("파이어베이스에서 데이터 가져왔습니다!!")
              let tip = snapshot.val();
              
              setState(tip)
              setReady(false)
            }).catch(error => {
              console.error('Firebase 데이터 가져오기 실패:', error);
            });
          
        },500)
     
        
      },[])


      useEffect(() => {
        const today = dayjs().format('YYYY-MM-DD');
        const filteredData = state.filter((item) => item.date === today);
        setTodayMenu(filteredData);
      }, [state]);

      

  return ready ? <Loading/> :  (
    <View style={styles.container}>
        <Text style={styles.title}>오늘의 메뉴</Text>

        <View style={styles.cardContainer}>
        {todayMenu.length > 0 ? (
          <Card content={todayMenu[0]} navigation={navigation} />
        ) : (
          <Text>오늘의 식단이 없습니다.</Text>
        )}
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
    cardContainer : {
        padding:10,
        backgroundColor:"#fff",
        marginTop:30,
        borderRadius:20,
        borderWidth:7,
        borderColor:"#eee",
        justifyContent:"center",
        alignItems:"center",
        height : 450,
        width:300,
    }
})