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
import CreateModal from "../components/CreateModal";
import Definition from "../components/Definition";
import uuid from "react-native-uuid";
import Voice from 'react-native-voice';
import { spawn } from 'child_process';
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const HEIGHT_MODAL = 343;

const VocabList = (props) => {
	const [definition, setDefinition] = React.useState();
	const [definitionArray, setDefinitionArray] = React.useState(
		props.navigation.getParam("definitions")
	);

	const [isModalVisible, setisModalVisible] = React.useState(false);

	const [recording, setRecording] = React.useState(false);
	const [recognizedText, setRecognizedText] = useState('');

	const onRecordButtonPress = () => {
	    if (isRecording) {
	      Voice.stop();
	    } else {
	      Voice.start('en-US');
	    }
	    setIsRecording(!isRecording);
	  };

	  const onSpeechRecognized = (e) => {
	    setRecognizedText(e.value);
	  };

	  const onSpeechResults = (e) => {
	    const spokenText = e.value[0];
	    const pythonProcess = spawn('python', ['../speech_recognition/speech-recognition.py', spokenText]);
	    pythonProcess.stdout.on('data', (data) => {
	      console.log(data.toString());
	     
	  };
	
	fetch('http://127.0.0.1/data')
	  .then(response => response.json())
	  .then(data => {
	    	 props.navigation
		.getParam("definitions")
		.push({ text: data.toString(), id: uuid.v4() });
	    })
	  .catch(error => console.error(error));
	
	const changeModalVisible = (bool) => {
		setisModalVisible(bool);
	};

	React.useEffect(() => {
		props.navigation.setParams({
			definitions: definitionArray,
		});
	}, []);
	const handleDeleteWord = async (uuid) => {
		setDefinitionArray((prev) =>
			prev.filter((word) => {
				return word.id !== uuid;
			})
		);
	};
	return (
		<View style={styles.definitionListScreen}>
			{isModalVisible ? <View style={styles.overLay}></View> : null}
			<Image
				style={styles.backgroundImg}
				source={require("../assets/images/shape-green.png")}
			/>
			<View style={styles.listContainer}>
				<FlatList
					data={definitionArray}
					renderItem={({ item }) => (
						<Definition
							// definitionArray={(word) => item.definitionArray.push(word)}
							key={item.id}
							uuid={item.id}
							title={item.text}
							handleDeleteComponent={(uuid) => {
								handleDeleteWord(uuid);
							}}
						/>
					)}
				/>
			</View>
			<TouchableOpacity
				onPress={() => setRecording((recording) => !recording)}
				style={styles.addWrapperLeft}
			>
				<View>
					{recording ? (
						<Image source={require("../assets/images/stop.png")} />
					) : (
						<Image source={require("../assets/images/mic.png")} />
					)}
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeModalVisible(true)}
				style={styles.addWrapperRight}
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
					handleAddComponent={() => {
						props.navigation
							.getParam("definitions")
							.push({ text: definition, id: uuid.v4() });
					}}
					setState={setDefinition}
					placeHolder={"Edit"}
				/>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	definitionListScreen: {
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
	addWrapperLeft: {
		position: "absolute",
		bottom: 20,
		left: 20,
		backgroundColor: "#f9f9f9",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		width: 70,
		height: 70,
		elevation: 10,
	},
	addWrapperRight: {
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

export default VocabList;
