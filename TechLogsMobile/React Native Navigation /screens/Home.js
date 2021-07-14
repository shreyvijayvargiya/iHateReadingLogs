import React from 'react';
import { View } from 'react-native';
import { Headline, Paragraph, Button  } from 'react-native-paper';

const Home = ({ navigation }) => {
    return (
        <View style={{ width: "90%", alignSelf: "center", padding: 20 }}>
            <Paragraph>
                React Native Navigation 
            </Paragraph>
            <Button
                mode="contained"
                onPress={() => navigation.openDrawer()}
            >
                Open Drawer
            </Button>
        </View>
    );
};
export default Home;
