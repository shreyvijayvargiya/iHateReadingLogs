import React from 'react';
import { View, Text } from 'react-native';
import { Button, CheckBox, ThemeProvider } from 'react-native-elements';


const theme = {
  Button: {
    raised: true,
  },
};


const App = () => {
  // Now evey button we will be using will be raised in nature
  return (
    <ThemeProvider theme={theme}>
      <View style={{ display: 'flex', flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Boilerplate for React Native Elements</Text>
        <Button title="React Native Element Button" type="contained" color="black" />
        <CheckBox
          title='Click Here'
        />
      </View>
    </ThemeProvider>
  );
};
export default App;

