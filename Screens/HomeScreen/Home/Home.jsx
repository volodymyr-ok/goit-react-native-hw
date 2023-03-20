import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// CommentsScreen
// MapScreen

const Home = () => {
  return (
    <View styles={styles.mainScreen}>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
      <Text style={styles.mainText}>HomeHomeHomeHomeHomeHome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 50,
  },
  mainText: {
    textAlign: 'center',
  },
});

export default Home;
