import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';
import AppComponent from './components/Posts';
import { Provider as PaperProvider } from 'react-native-paper';

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
    <PaperProvider>
      <View style={styles.container} onLayout={onLayoutView}>
        <AppComponent users={users} />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
