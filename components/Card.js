import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Card({content,navigation}){
  return content.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.noDataText}>데이터가 없습니다.</Text>
    </View>
  ) : (
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <View style={styles.card}>
          <Text style={styles.date}>{content.date}</Text>
          <Text style={styles.menu}>{content.banchan1}</Text>
          <Text style={styles.menu}>{content.banchan2}</Text>
          <Text style={styles.menu}>{content.banchan3}</Text>
          <Text style={styles.menu}>{content.banchan4}</Text>
       </View>
    )
}


const styles = StyleSheet.create({
    card:{
      flex:1,
      flexDirection:"column",
      margin:30
    },
    date: {
        fontSize:35,
        color:"#A6A6A6",
        paddingBottom:10,
    },
    menu: {
      fontSize:20,
      fontWeight:"700",
      textAlign:'center',
      margin:10,
    },
    noDataText: {
      fontSize: 20,
      margin:10,
      textAlign:'center',

    }

});