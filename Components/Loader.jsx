import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../utils/styles';

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={100} color={colors.mainAccent} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: '100%',
    height: '100%',
    zIndex: 100,
    // flex: 1,
    justifyContent: 'center',
    // backgroundColor: colors.bgContent,
    backgroundColor: '#87878740',
    // backgroundColor: colors.cameraBtn,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
