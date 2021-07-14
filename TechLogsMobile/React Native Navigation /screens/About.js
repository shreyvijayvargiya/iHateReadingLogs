import React from 'react';
import { View } from 'react-native';
import { Headline, Paragraph, Button  } from 'react-native-paper';

const About = ({ navigation }) => {
    return (
        <View style={{ width: "90%", alignSelf: "center", padding: 20 }}>
            <Paragraph>
                About
            </Paragraph>
        </View>
    );
};
export default About;
