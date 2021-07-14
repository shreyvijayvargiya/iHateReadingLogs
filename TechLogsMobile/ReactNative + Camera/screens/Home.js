import React from 'react';
import { View } from 'react-native';
import { Headline, Paragraph, Button  } from 'react-native-paper';

const Home = ({ navigation }) => {
    return (
        <View style={{ width: "90%", alignSelf: "center", padding: 20 }}>
            <Paragraph>
                React Native Camera Module 
            </Paragraph>
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Camera")}
            >
                Click Picture
            </Button>
        </View>
    );
};
export default Home;
