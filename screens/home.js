import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import { getDatabase, ref, set } from "firebase/database";
import { db } from "../firebase.config.js";
import uuid from "react-native-uuid";

export default function Home(props) {
	const navigateStackHandler = () => {
		props.navigation.navigate("BookList");
		//props.navigation.push("VocabList");
	};

	function writeUserData(name, email) {
		const id = uuid.v4();
		set(ref(db, "users/" + id), {
			username: name,
			email: email,
			id: id,
		})
			.then(() => {
				alert("data updated");
				navigateStackHandler();
			})
			.catch((error) => {
				alert(error);
			});
	}
	return (
		<View style={styles.homeScreen}>
			<Image
				style={styles.backgroundImg}
				source={require("../assets/images/shape-blue.png")}
			/>
			<View style={styles.splashArt}>
				<Image
					// style={styles.mainImage}
					source={require("../assets/images/undraw_mobile_ux_o0e1_1.png")}
				/>
				<Text style={styles.homeScreenTitle}>
					Build your vocabulary with MyReadingPal
				</Text>
				<Text style={styles.homeScreenIntro}>
					A user-friendly mobile application that uses artificial intelligence
					to keep track of brand new words while you peacefully read
				</Text>
				<Button
					onPress={() => {
						writeUserData("dion", "dionolumese@gmail.com");
					}}
					text="Get Started"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
			{/*This is where get started goes*/}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	homeScreen: {
		flex: 1,
		backgroundColor: "#fff",
		textAlign: "center",
		paddingTop: 80,
		paddingHorizontal: 20,
		alignItems: "center",
		position: "relative",
	},
	homeScreenTitle: {
		fontSize: 18,
		fontWeight: "bold",
		width: 271,
		textAlign: "center",
		marginBottom: 20,
		marginTop: 30,
	},
	homeScreenIntro: {
		fontSize: 14,
		width: 281,
		marginBottom: 70,
		textAlign: "center",
	},
	mainImage: {
		width: 140,
		height: 140,
	},
	splashArt: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 60,
		marginBottom: 40,
		marginTop: 50,
	},
	backgroundImg: {
		position: "absolute",
		top: 0,
		left: 0,
	},
});
