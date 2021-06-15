import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Headline, Text } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View style={{ display: 'flex', flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Headline>Welcome to React Native Project</Headline>
        <Text>This application is developed using React Native Paper</Text>
      </View>
    </PaperProvider>
  );
};
export default App;
