import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  cameraView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.shapeAccent,
  },
  cameraBtn: {
    width: 60,
    height: 60,
    backgroundColor: colors.cameraBtn,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    color: colors.placeholder,
  },
});

export default styles;
