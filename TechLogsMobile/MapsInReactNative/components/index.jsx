import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapComponent from './Map';

const AppComponent = ({ users }) => {
    return (
        <View>
            <StatusBar style="auto" />
            <MapComponent />
        </View>
    )
};
export default AppComponent;
