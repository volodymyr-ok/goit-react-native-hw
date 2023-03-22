import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../utils/styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 15,
    paddingHorizontal: 16,
    backgroundColor: colors.bgContent,
    justifyContent: 'space-between',
  },

  cameraWrap: {
    position: 'relative',

    marginBottom: 8,
    height: 240,
    borderWidth: 1,
    borderColor: colors.shapeAccent,
    borderRadius: 8,
    overflow: 'hidden',
  },

  photo: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,

    // height: 240,
    // width: '100%',
    height: '35%',
    width: '45%',
  },

  cameraViewport: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  cameraBtn: {
    width: 60,
    height: 60,
    backgroundColor: colors.cameraBtn,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  cameraIcon: {
    color: colors.placeholder,
  },

  chooseBtn: {
    marginBottom: 48,
    alignSelf: 'flex-start',
  },

  chooseText: {
    lineHeight: 19,
    fontSize: 16,
    fontFamily: fonts.robo4,
    color: colors.placeholder,
  },

  input: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.shapeAccent,

    lineHeight: 19,
    fontSize: 16,
    fontFamily: fonts.robo4,
    color: colors.mainText,

    marginBottom: 16,
  },

  inputWrap: {
    marginBottom: 32,
    position: 'relative',
    justifyContent: 'center',
  },

  loactionIcon: {
    position: 'absolute',
    top: 15,
    left: 4,
    color: colors.placeholder,
  },

  submitBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.layoutBg,
  },

  submitText: {
    fontSize: 16,
    fontFamily: fonts.robo4,
    color: colors.placeholder,
  },

  deleteBtn: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.layoutBg,

    marginTop: 20,
  },
  deleteIcon: {
    color: colors.placeholder,
  },
});

export default styles;
