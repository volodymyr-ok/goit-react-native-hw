import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../utils/styles';
import { useNavigation } from '@react-navigation/native';

const BackBtn = () => {
  const navigation = useNavigation();

  const backBtnStyles = {
    marginLeft: 16,
    height: '100%',
    justifyContent: 'center',
  };

  // backBehavior="history"
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={backBtnStyles}>
      <AntDesign name="arrowleft" size={24} color={colors.nonAccent} />
    </TouchableOpacity>
  );
};

export default BackBtn;
