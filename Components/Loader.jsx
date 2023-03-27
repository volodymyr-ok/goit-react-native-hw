import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000043',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
