import React from 'react';
import { StyleSheet, View, Dimensions, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Title, Divider, Text } from 'react-native-paper';
import Footer from './Footer';
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

const AppComponent = () => {
    return (
        <View style={styles.root}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Title style={styles.heading}>Chart in React Native</Title>
            </View>
            <View style={styles.list}>
                <VictoryChart 
                    width={440} 
                    >
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" }
                        }}
                        events={[{
                            target: 'data',
                            eventHandlers: {
                                onPress: (e) => {
                                    Alert.alert(`x: ${e.clientX}`, `y: ${e.clientY}`)
                                }
                            }
                        }]}
                        data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                        ]}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                    />
                </VictoryChart>
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    )
};
export default AppComponent;

const styles = StyleSheet.create({
    list: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height *0.86,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 0,
    },
    root: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    heading: {
        textAlign: 'center',
        marginTop: 30
    },
    header: {
        padding: 10,
        backgroundColor: '#FDA085',
        width: Dimensions.get('window').width
    },
})