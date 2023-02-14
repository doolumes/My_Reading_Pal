import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBzZz9ppe2Kkus-eZvaD2S8n5aZL6UynU4",
	authDomain: "myreadingpal-e5af5.firebaseapp.com",
	databaseURL: "https://myreadingpal-e5af5-default-rtdb.firebaseio.com",
	projectId: "myreadingpal-e5af5",
	storageBucket: "myreadingpal-e5af5.appspot.com",
	messagingSenderId: "1062533530782",
	appId: "1:1062533530782:web:5816867ac5291ca923e78f",
	measurementId: "G-SVQCG2FY7B",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
