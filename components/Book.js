import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EnterModal from "../components/EnterModal";
import Definition from "../components/Definition";
import CRUDButton from "./CRUDButton";

const Book = (props) => {
	const [book, setBook] = React.useState(props.title);
	const [definition, setDefinition] = React.useState();
	const [definitionArray, setDefinitionArray] = React.useState(
		props.definitions
	);
	const [wordCount, setWordCount] = React.useState(definitionArray.length);
	const [favorite, setFavorite] = React.useState(props.favorited);
	const [isModalVisible, setisModalVisible] = React.useState(false);
	const [chooseData, setChooseData] = React.useState();

	const handleAddDefinition = () => {
		setDefinitionArray([
			...definitionArray,
			{
				definition: definition,
				id: uuid.v4(),
			},
		]);
		setDefinition(null);
	};

	const handleDeleteDefinition = (uuid) => {
		setDefinitionArray((prev) =>
			prev.filter((definition) => {
				return definition.id !== uuid;
			})
		);
	};

	const changeModalVisible = (bool) => {
		setisModalVisible(bool);
	};

	const setData = (data) => {
		setChooseData(data);
	};

	const toggleFavorite = () => {
		setFavorite((state) => !state);
	};

	console.log(definitionArray);
	console.log(definitionArray.length);
	return (
		<View>
			<TouchableOpacity
				style={styles.component}
				onPress={() => changeModalVisible(true)}
				setBook={(e) => {}}
			>
				<Text style={{ fontWeight: "bold" }}>{book}</Text>
				<Text>Words: {definitionArray.length}</Text>

				<TouchableOpacity
					style={styles.star}
					onPress={() => {
						toggleFavorite();
						props.handleFavoriteBook(props.uuid);
					}}
				>
					{favorite ? (
						<Image source={require("../assets/images/star-filled.png")} />
					) : (
						<Image source={require("../assets/images/star-empty.png")} />
					)}
				</TouchableOpacity>
			</TouchableOpacity>
			<Modal
				transparent={true}
				animationType="fade"
				visible={isModalVisible}
				nRequestClose={() => changeModalVisible(false)}
			>
				<EnterModal
					changeModalVisible={changeModalVisible}
					setData={setData}
					value={book}
					onChange={(text) => setBook(text)}
					handleDeleteComponent={() => props.handleDeleteComponent(props.uuid)}
					navigateStackHandler={() =>
						props.navigation.navigate("VocabList", {
							definitions: definitionArray,
						})
					}
				/>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	component: {
		backgroundColor: "#FAFAFA",
		marginBottom: 20,
		height: 95,
		width: "90%",
		paddingTop: 20,
		paddingLeft: 15,
		elevation: 10,
		marginLeft: 20,
		margiRight: 20,
	},
	star: {
		position: "absolute",
		right: 15,
		bottom: 15,
	},
});

export default Book;
