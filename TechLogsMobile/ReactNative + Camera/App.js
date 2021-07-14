import React from 'react';
import { Home, About, Drawer } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const HomeScreenDrawer = () => {
    return (
      <Drawer.Navigator drawerContent={props => <Drawer {...props} />}>
        <Drawer.Screen 
          name="HomeScreen"
          component={Home}
        />
      </Drawer.Navigator>
    )
  }
  const HomeScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          component={HomeScreenDrawer}
          name="HomeScreen"
        /> 
        <Tab.Screen
          component={About}
          name="About"
        /> 
      </Tab.Navigator>
    )
  }
  
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="HomeScreen"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};
export default App;
