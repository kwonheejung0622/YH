import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCdr1C4CDUKvKFq14jtdasoEw9OfK7b-tE",
    authDomain: "yh-menu.firebaseapp.com",
    projectId: "yh-menu",
    databaseURL: "https://yh-menu-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "yh-menu.appspot.com",
    messagingSenderId: "385925736276",
    appId: "1:385925736276:web:1af6a1b2425637d7d30ac1",
    measurementId: "G-MMPDB0YTR4"
  };
  
  

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()