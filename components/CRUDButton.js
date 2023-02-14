import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function CRUDButton(props) {
	return (
		<TouchableOpacity style={{ width: "100%" }} onPress={props.onPress}>
			<View
				style={{
					paddingVertical: 14,
					paddingHorizontal: 20,
					backgroundColor: props.color,
					width: "100%",
				}}
			>
				<Text style={styles.buttonText}>{props.text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
});
