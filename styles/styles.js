import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    header: {
        backgroundColor: "#282730"
    },
    row: {
        minHeight: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#33333D",
        borderBottomWidth: 1,
        borderBottomColor: "#B3B3B9",
    },
    cell: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    dailyChange: {
        width: "60%",
        alignSelf: "flex-end",
        paddingTop: 10,
        paddingBottom: 10,
    },
    text: {
        color: "#fff",
    },
    textBig: {
        fontSize: 16,
    },
    textSmall: {
        fontSize: 12,
    },
});