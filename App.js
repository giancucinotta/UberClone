import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

// 1) Set up redux toolkit

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text >Let's build UBER</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(231,243,217,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
