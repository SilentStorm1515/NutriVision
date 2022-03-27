import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function TopBar() {
    return (
        <View style={styles.topBar}>
            <Text style={styles.logoText}> NutriVision </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "#dbd4af",
        width: "100%",
        padding: 15,

        display: 'flex',
        flexDirection: 'row',
        
        textAlign: 'center',
    },
    logoText: {
        fontSize: 20,
        fontWeight: "700",
    },
})