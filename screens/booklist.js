import React from "react";
import {
	View,
	StyleSheet,
	Image,
	Modal,
	Dimensions,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Book from "../components/Book";
import Button from "../components/Button";
import CreateModal from "../components/CreateModal";
import uuid from "react-native-uuid";
import { AsyncStorage } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const HEIGHT_MODAL = 343;

const BookList = (props) => {
	const [isModalVisible, setisModalVisible] = React.useState(false);
	const [chooseData, setChooseData] = React.useState();
	const [state, setState] = React.useState(false);
	const [book, setBook] = React.useState();
	const [bookArray, setBookArray] = React.useState([]);

	const handleAddBook = () => {
		setBookArray([
			...bookArray,
			{
				title: book,
				definitions: [],
				wordCount: 0,
				favorited: false,
				id: uuid.v4(),
			},
		]);
		setBook(null);
	};

	const handleDeleteBook = (uuid) => {
		setBookArray((prev) =>
			prev.filter((book) => {
				return book.id !== uuid;
			})
		);
	};
	const changeModalVisible = (bool) => {
		setisModalVisible(bool);
	};

	const setData = (data) => {
		setChooseData(data);
	};

	const handleFavoriteBook = (uuid) => {
		const targetBook = bookArray.filter((book) => book.id === uuid)[0];
		const temp = bookArray.filter((book) => book.id !== uuid);
		if (!temp.favorited) temp.unshift(targetBook);
		else temp.push(targetBook);
		setBookArray(temp);
	};

	return (
		<View style={styles.bookListScreen}>
			{isModalVisible ? <View style={styles.overLay}></View> : null}
			<Image
				style={styles.backgroundImg}
				source={require("../assets/images/shape-green.png")}
			/>
			<View style={styles.listContainer}>
				<View>
					<FlatList
						data={bookArray}
						renderItem={({ item }) => (
							<Book
								title={item.title}
								definitions={item.definitions}
								wordCount={item.wordCount}
								favorited={item.favorited}
								key={item.id}
								uuid={item.id}
								changeModalVisible={changeModalVisible}
								handleDeleteComponent={(uuid) => handleDeleteBook(uuid)}
								handleFavoriteBook={(uuid) => handleFavoriteBook(uuid)}
								navigation={props.navigation}
							/>
						)}
					/>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => changeModalVisible(true)}
				style={styles.addWrapper}
			>
				<View>
					<Image source={require("../assets/images/plus.png")} />
				</View>
			</TouchableOpacity>
			<Modal
				transparent={true}
				animationType="fade"
				visible={isModalVisible}
				nRequestClose={() => changeModalVisible(false)}
			>
				<CreateModal
					changeModalVisible={changeModalVisible}
					setData={setData}
					handleAddComponent={handleAddBook}
					setState={setBook}
					placeHolder={"Title, ISBN, Author"}
				/>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	bookListScreen: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 30,
		paddingHorizontal: 20,
		position: "relative",
	},
	listContainer: {
		height: HEIGHT * 0.73,
	},
	backgroundImg: {
		position: "absolute",
		top: 0,
		left: 0,
	},
	addWrapper: {
		position: "absolute",
		bottom: 20,
		right: 20,
		backgroundColor: "#f9f9f9",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		width: 70,
		height: 70,
		elevation: 10,
	},
	overLay: {
		position: "absolute",
		zIndex: 9999,
		width: WIDTH,
		height: HEIGHT,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
});

export default BookList;
