import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function TopBar() {
    return (
        <View style={styles.topBar}>
            <Text style={styles.logoText}> NutriVision </Text>
            <Image style={styles.icon} source={require('./Images/icon_face.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "#F0A500",
        width: "100%",
        padding: 15,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //alignItems: 'center',
    },
    logoText: {
        fontSize: 20,
        fontWeight: "700",
        //justifyContent: "left"
    },
    icon: {
        //textAlign:'right'
        height:40,
        width:40
    }
})