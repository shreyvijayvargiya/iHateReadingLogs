import React from 'react';
import { Home, Camera } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};
export default App;
