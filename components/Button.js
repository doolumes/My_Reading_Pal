import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Button(props) {
	return (
		<TouchableOpacity style={styles.button} onPress={props.onPress}>
			<View>
				<Text style={styles.buttonText}>{props.text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 14,
		paddingHorizontal: 20,
		backgroundColor: "#50C2C9",
		width: 325,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
});
