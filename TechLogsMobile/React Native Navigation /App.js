import React from 'react';
import { Home, About, DrawerComponent } from './screens';
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
      <Drawer.Navigator drawerContent={props => <DrawerComponent {...props} />}>
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
          name="HomeScreen"
          component={HomeScreenDrawer}
        /> 
        <Tab.Screen
          name="About"
          component={About}
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
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};
export default App;
