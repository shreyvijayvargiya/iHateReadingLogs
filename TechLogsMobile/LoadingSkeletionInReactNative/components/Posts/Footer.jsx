import React, { pure } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Caption } from 'react-native-paper';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Caption style={{ textAlign: 'center', color: '#f1f1f1'}}>Developed By Shrey Vijayvargiya</Caption>
        </View>
    );
};
export default Footer;

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#272727',
        paddingBottom: 30,
    }
})
