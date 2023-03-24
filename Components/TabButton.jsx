import React from 'react';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { colors } from '../utils/styles';
import { View } from 'react-native';

const TabButton = (focused, name) => {
  const btnStyles = {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,

    backgroundColor: focused ? colors.mainAccent : 'transparent',
  };
  const iconColor = focused ? colors.submitText : colors.nonAccent;

  return (
    <View style={btnStyles}>
      {name === 'Posts' && <Ionicons name="grid-outline" size={24} color={iconColor} />}
      {name === 'Create' && <AntDesign name="plus" size={24} color={iconColor} />}
      {name === 'Profile' && <Feather name="user" size={24} color={iconColor} />}
    </View>
  );
};

export default TabButton;
