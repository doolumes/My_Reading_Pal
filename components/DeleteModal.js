import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	Image,
	SafeAreaView,
	TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CRUDButton from "./CRUDButton";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = 303;

const DeleteModal = (props) => {
	const closeModal = (bool) => {
		props.changeModalVisible(bool);
	};
	return (
		<TouchableOpacity disabled={true} style={styles.container}>
			<View style={styles.modal}>
				<TouchableOpacity onPress={() => closeModal(false)} style={styles.exit}>
					<Image source={require("../assets/images/ex.png")} />
				</TouchableOpacity>
				<SafeAreaView style={styles.textView}>
					<TextInput
						multiline={true}
						numberOfLines={2}
						defaultValue={props.value}
						style={styles.input}
						onChangeText={(text) => props.onChange(text)}
						placeholder={"Edit"}
					/>
					<CRUDButton
						onPress={() => {
							props.handleDeleteComponent();
							closeModal(false);
						}}
						text="Remove"
						color="#FF8080"
						accessibilityLabel="Remove Definition"
					/>
					<CRUDButton
						onPress={() => closeModal(false)}
						text="Done"
						color="#50C2C9"
						accessibilityLabel="Update existing definition"
					/>
				</SafeAreaView>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: "auto",
		marginBottom: "auto",
	},
	modal: {
		height: HEIGHT_MODAL,
		paddingTop: 50,
		backgroundColor: "white",
		width: "80%",
		alignItems: "center",
		padding: 20,
		elevation: 20,
	},
	textView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		// paddingLeft: "10%",
		// paddingRight: "10%",
	},
	text: {
		margin: 5,
		fontSize: 16,
		fontWeight: "bold",
	},
	exit: {
		position: "absolute",
		right: 10,
		top: 20,
	},
	input: {
		height: "30%",
		width: "100%",
		borderWidth: 1,
		borderColor: "#50C2C9",
		padding: 10,
	},
});

export default DeleteModal;
