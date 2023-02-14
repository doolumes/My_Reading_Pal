import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home.js";
import BookList from "../screens/booklist.js";
import VocabList from "../screens/vocablist.js";
const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			headerStyle: { backgroundColor: "#6AE0D9" },
		},
	},
	BookList: {
		screen: BookList,
		navigationOptions: {
			title: "Books",
			headerStyle: { backgroundColor: "#BFDAD8" },
		},
	},
	VocabList: {
		screen: VocabList,
		navigationOptions: {
			title: "Words",
			headerStyle: { backgroundColor: "#BFDAD8" },
		},
	},
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
