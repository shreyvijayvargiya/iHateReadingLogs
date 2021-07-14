import React from 'react';
import { View } from 'react-native';
import { Headline, Paragraph, Button  } from 'react-native-paper';

const DrawerComponent = ({ navigation }) => {
    return (
        <View style={{ width: "90%", alignSelf: "center", padding: 20 }}>
            <Paragraph>
                Drawer
            </Paragraph>
        </View>
    );
};
export default DrawerComponent;
