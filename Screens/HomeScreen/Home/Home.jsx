import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
// CommentsScreen
// MapScreen

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.mainText}>HOME</Text>

      <TouchableOpacity style={styles.commonBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>logout</Text>
      </TouchableOpacity>

      <Button title="Posts" style={styles.commonBtn} onPress={() => navigation.navigate('Posts')} />

      <Button
        title="CreatePosts"
        style={styles.commonBtn}
        onPress={() => navigation.navigate('CreatePosts')}
      />

      <Button
        title="back"
        style={styles.commonBtn}
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

// borderColor: 'green',
// borderWidth: 1,
// { flex: 1, alignItems: 'center', justifyContent: 'center' }

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  mainText: {
    fontFamily: 'Orbitron',
    fontSize: 30,
    marginVertical: 30,
    textAlign: 'center',
  },
  commonBtn: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#28b3b6',
    borderRadius: 15,
  },
  btnText: {
    textAlign: 'center',
  },
});

export default Home;
