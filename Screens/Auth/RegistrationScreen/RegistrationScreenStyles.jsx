import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../utils/styles';

export default StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  mainContent: {
    position: 'relative',
    alignItems: 'center',

    paddingTop: 92,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: `${colors.bgContent}`,
  },

  pageTitle: {
    marginBottom: 33,

    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'medium',
    fontFamily: `${fonts.robo5}`,
    color: `${colors.mainText}`,
  },

  from: {
    marginBottom: 16,
  },

  profilePhoto: {
    position: 'absolute',
    top: -60,

    width: 120,
    height: 120,
    borderRadius: 16,

    backgroundColor: `${colors.layoutBg}`,
  },

  avatar: {
    position: 'absolute',
    zIndex: 1,
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  addPhotoBtn: {
    position: 'absolute',
    zIndex: 2,
    bottom: 14,
    right: -12,

    borderRadius: 50,
    backgroundColor: `${colors.bgContent}`,
  },

  input: {
    height: 50,
    marginBottom: 16,
    padding: 16,
    minWidth: '100%',

    borderColor: `${colors.shapeAccent}`,
    borderRadius: 8,
    borderWidth: 1,

    fontSize: 16,
    fontFamily: `${fonts.robo4}`,
    color: `${colors.mainText}`,
  },

  passwordWrap: {
    position: 'relative',
    marginBottom: 43,
    justifyContent: 'center',
  },

  secureBtn: {
    position: 'absolute',
    right: 0,
    padding: 16,
    height: 50,
  },

  secureText: {
    fontSize: 16,
    fontFamily: `${fonts.robo4}`,
    color: `${colors.additionalText}`,
  },

  submitBtn: {
    borderRadius: 100,
    paddingVertical: 16,

    backgroundColor: `${colors.mainAccent}`,
  },

  submitText: {
    textAlign: 'center',
    color: `${colors.submitText}`,
  },

  navigationText: {
    textAlign: 'center',
    color: `${colors.additionalText}`,
  },
});
