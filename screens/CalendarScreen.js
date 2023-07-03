import React, {useEffect, useState, useMemo} from "react";
import { Calendar} from "react-native-calendars";
import { StyleSheet, ScrollView, View, Text} from "react-native";

import {format} from 'date-fns';
import {firebase_db} from "../firebaseConfig"

import Card from "../components/Card";
import Loading from '../components/Loading'


export default function CalendarScreen({navigation}) {

  const [state,setState] = useState([])
  const [cateState,setCateState] = useState([])

  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'),);
  const [ready,setReady] = useState(true) 

  
  useEffect(()=>{
    navigation.setOptions({
      title:'식단표'
    })  

    const fetchData = async () => {
      try {
        const snapshot = await firebase_db.ref("/tip").once("value");
        const tip = snapshot.val();
        setState(tip);
        setReady(false);
      } catch (error) {
        console.error("Firebase 데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, [state]);


  const markedDates = useMemo(
    () =>
      state.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [state]
  );

  
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  useEffect(() => {
    const today = selectedDate
    const filteredData = state.filter((item) => item.date === today);
    setCateState(filteredData);
  }, [state]);




  return ready ? <Loading/> : (
    <ScrollView style={styles.container}>
      <Calendar
        style={styles.calendar}
        current={selectedDate}
        markedDates={markedSelectedDate}
        onDayPress={(day)=>{setSelectedDate(day.dateString)}}
      />
      <View style={styles.cardContainer}>
      {cateState.length > 0 ? (
          <Card content={cateState[0]} navigation={navigation} />
        ) : (
          <View style={styles.no}>
          <Text style={styles.noMenuDate}>{selectedDate}</Text>
          <Text style={styles.noMenuText}>해당 날짜의 데이터가 없습니다.</Text>
          </View>
        )}
        
      </View>
      <View style={styles.margin}/>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex:3
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderRadius:10,
    elevation:4,
    marginHorizontal:30,
    marginVertical:20
  },
  data : {
    margin:30,
    fontSize:20,
  },
  margin: {
    margin:10,
  },
  cardContainer: {
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    backgroundColor:'#fff',
    marginHorizontal:30,
    marginTop:15,
  },
  no :{
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:40
  },
  noMenuDate:{
    fontSize:35,
    color:"#A6A6A6",
  },
  noMenuText:{
    paddingTop:30,
    fontSize:20,
  }
});

