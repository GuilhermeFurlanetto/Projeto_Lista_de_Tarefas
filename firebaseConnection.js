import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC3GyYoNaiINBQJWgRZf80FaUSUMJTXIUo",
    authDomain: "curso-9cb85.firebaseapp.com",
    projectId: "curso-9cb85",
    storageBucket: "curso-9cb85.appspot.com",
    messagingSenderId: "388623878977",
    appId: "1:388623878977:web:58335770275c22305f2fc0",
    measurementId: "G-PGJ4HY582S"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth}