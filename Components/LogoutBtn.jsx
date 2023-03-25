import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../utils/styles';
import { useDispatch } from 'react-redux';
import { authSignOut } from '../redux/auth/authOperations';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const styles = {
    marginRight: 16,
    height: 44,
    justifyContent: 'center',
  };

  const handleLogOut = () => dispatch(authSignOut());

  return (
    <TouchableOpacity onPress={handleLogOut} style={styles}>
      <Feather name="log-out" size={24} color={colors.logoutBtn} />
    </TouchableOpacity>
  );
};

export default LogoutBtn;
