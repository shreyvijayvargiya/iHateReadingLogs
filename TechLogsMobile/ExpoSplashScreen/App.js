import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';

export default function App() {

  const [appIsReady, setAppIsReady] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function prepare(){
      try {
        await SplashScreen.preventAutoHideAsync();
        await axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
          setUsers(res.data)
        })
      }catch(e){
        console.log(e)
      }finally{
        setAppIsReady(true)
      }
    }
    prepare()
  }, []);

  const onLayoutView = useCallback(async() => {
    if(appIsReady){
        await SplashScreen.hideAsync()
    }}, [appIsReady]
    );
    if(!appIsReady){
        return null
  };
  return (
    <View style={styles.container} onLayout={onLayoutView}>
      <Text>Adding Splash screen on App</Text>
      <StatusBar style="auto" />
      {users.length > 0 && users.map(item => {
        return (
          <View key={item.id}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )
      }) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
