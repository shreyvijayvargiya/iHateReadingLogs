import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Headline, Text } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <PaperProvider>
          <View style={{ display: 'flex', flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Headline>Welcome to React Native + Redux</Headline>
            <Text>Boilerplate for Redux with React Native</Text>
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
