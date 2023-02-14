import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";
import Home from "./screens/home";
import * as Font from "expo-font";

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
	if (fontsLoaded) {
		return <Navigator />;
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onError={handleLoadingError}
				onFinish={() => setFontsLoaded(true)}
			/>
		);
	}
}
// var statusBarHeight = StatusBar.currentHeight;
