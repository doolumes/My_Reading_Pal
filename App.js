import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";
import Home from "./screens/home";
import * as Font from "expo-font";
import firebase from 'firebase';

function SignupForm() {
const [user, setUser] = useState(null);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleSignup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created!');
      })
      .catch(error => {
        console.error(error);
      });
  };

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
	
const getFonts = () =>
	Font.loadAsync({
		"poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
	});

const handleLoadingError = (error) => {
	// In this case, you might want to report the error to your error
	// reporting service, for example Sentry
	warn(error);
};


export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	if (fontsLoaded & !userChanged) {
		return <Navigator />;
	} else {
		return (
			
			<>
				<AppLoading
					startAsync={getFonts}
					onError={handleLoadingError}
					onFinish={() => setFontsLoaded(true)}
				/>
				<>
				      <TextInput
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
				      />
				      <TextInput
					placeholder="Password"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				      />
				      <Button
					title="Sign up"
					onPress={handleSignup}
				      />
				    </>
			<>
		);
	}
}
// var statusBarHeight = StatusBar.currentHeight;
