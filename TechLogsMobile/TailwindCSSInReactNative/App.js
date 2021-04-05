import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';
import tailwind from 'tailwind-rn';
import { PrimaryButton, SecondaryButton, ErrorButton, PrimaryRoundedButton, SecondaryRoundedButton, ErrorRoudedButton } from './components';

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
       <Text style={tailwind('text-2xl m-4')}>Tailwind CSS in React Native</Text>
      {/* <View style={tailwind('rounded-sm flex flex-row justify-between bg-gray-200 p-2')}>
        <View style={tailwind('rounded-sm w-1/2')}>
          <Text style={tailwind('text-left font-bold text-xl ')}>ID</Text>
        </View>
        <View style={tailwind('rounded-sm w-1/2')}>
          <Text style={tailwind('text-center font-bold text-xl')}>Name</Text>
        </View>
      </View>
      {users.length> 0 && users.map(item => {
        return (
          <View key={item.id} style={tailwind('rounded-sm flex bg-gray-50 flex-row justify-between p-2')}>
            <View style={tailwind('rounded-sm w-1/2')}>
              <Text style={tailwind('text-left font-bold text-xl')}>{item.id}</Text>
            </View>
            <View style={tailwind('rounded-sm w-1/2')}>
              <Text style={tailwind('text-center font-bold text-xl')}>{item.name}</Text>
            </View>
          </View>
        )
      })} */}
       <View style={tailwind('p-4 bg-gray-100 w-4/5 rounded-sm m-4')}>
        <Text style={tailwind('text-2xl m-5')}>Buttons</Text>
        <PrimaryButton />
        <SecondaryButton />
        <ErrorButton />
      </View>
      <View style={tailwind('p-4 w-4/5 bg-gray-100 rounded-sm m-4')}>
        <Text style={tailwind('text-2xl m-5')}>Rounded Buttons</Text>
        <PrimaryRoundedButton />
        <SecondaryRoundedButton />
        <ErrorRoudedButton />
        <StatusBar style="auto"  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth:1,
    borderTopColor: 'rgb(240, 240, 240)',
    backgroundColor: '#ffff',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
});
