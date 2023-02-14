import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Modal,
	TouchableOpacity,
} from "react-native";
import DeleteModal from "../components/DeleteModal";

const Definition = (props) => {
	const [wordsCount, setWordsCount] = React.useState(0);
	const [isModalVisible, setisModalVisible] = React.useState(false);
	const [chooseData, setChooseData] = React.useState();
	const [definition, setDefiniton] = React.useState(props.title);
	const changeModalVisible = (bool) => {
		setisModalVisible(bool);
	};
	const setData = (data) => {
		setChooseData(data);
	};
	return (
		<View>
			<TouchableOpacity
				style={styles.component}
				onPress={() => changeModalVisible(true)}
				setDefinition={(e) => {}}
			>
				<Text>{definition}</Text>
			</TouchableOpacity>

			<Modal
				transparent={true}
				animationType="fade"
				visible={isModalVisible}
				nRequestClose={() => changeModalVisible(false)}
			>
				<DeleteModal
					changeModalVisible={changeModalVisible}
					setData={setData}
					value={definition}
					onChange={(text) => setDefiniton(text)}
					handleDeleteComponent={() => props.handleDeleteComponent(props.uuid)}
				/>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	component: {
		marginBottom: 20,
		width: "90%",
		paddingLeft: 15,
		marginLeft: 20,
		margiRight: 20,
	},
	star: {
		position: "absolute",
		right: 15,
		bottom: 15,
	},
});

export default Definition;
