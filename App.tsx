/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {store} from './src/store';
import AppNavigation from './src/navigation';
import {OfflineScreen} from './src/screens';
import i18n from './src/service/i18n';

declare const global: {HermesInternal: null | {}};

let currentNetwork: boolean | null;

NetInfo.fetch().then((state) => {
  currentNetwork = state.isConnected;
});

const App = () => {
  const initI18n = i18n;
  const [netInfo, setNetInfo] = useState(currentNetwork);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
      setNetInfo(state.isConnected && state.isInternetReachable);
    });
    return () => unsubscribe();
  }, []);

  if (!netInfo) {
    return <OfflineScreen />;
  }
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <AppNavigation />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
