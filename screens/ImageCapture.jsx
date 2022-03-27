import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Camera } from 'expo-camera';
//import { ErrorAlert, ErrorText } from "./utils";
//import { styles } from "./styles";

import Navbar from "../components/NavBar/NavBar.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";

const CameraScreen = ({ navigation }) =>  {
    <TopBar />

    const [hasPermission, setHasPermission] = useState(null);
    const[type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermissions(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if(hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return(
        <View style={styles.container}>
            <Camera style={styles.camera} type = {type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                :Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>    
                        </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
    <Navbar handleNavigate={to => navigation.navigate(to)} />
}

export default CameraScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'black',
    },
  });

