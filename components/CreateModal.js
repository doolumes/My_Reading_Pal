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
import CRUDButton from "./CRUDButton";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = "60%";

const CreateModal = (props) => {
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
						style={styles.input}
						onChangeText={(text) => props.setState(text)}
						placeholder={props.placeHolder}
						numberOfLines={2}
					/>
					<CRUDButton
						// onPress={}
						text="Create"
						color="#50C2C9"
						accessibilityLabel="Learn more about this purple button"
						onPress={() => {
							props.handleAddComponent();
							closeModal(false);
						}}
					/>
				</SafeAreaView>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modal: {
		height: HEIGHT_MODAL,
		paddingTop: 50,
		backgroundColor: "white",
		width: "80%",
		alignItems: "center",
		padding: 20,
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
		height: 40,
		width: "100%",
		borderWidth: 1,
		borderColor: "#50C2C9",
		padding: 10,
	},
});

export default CreateModal;
