import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../utils/styles';
import { useNavigation } from '@react-navigation/native';

const LogoutBtn = () => {
  const { navigate } = useNavigation();

  const logoutStyles = {
    marginRight: 16,
    height: 44,
    justifyContent: 'center',
  };

  return (
    <TouchableOpacity onPress={() => navigate('Login')} style={logoutStyles}>
      <Feather name="log-out" size={24} color={colors.logoutBtn} />
    </TouchableOpacity>
  );
};

export default LogoutBtn;
