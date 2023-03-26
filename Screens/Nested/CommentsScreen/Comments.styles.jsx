import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../utils/styles';

export const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: colors.bgContent,
  },

  image: { height: 240, width: '100%', borderRadius: 8, marginBottom: 32 },

  inputWrap: {
    // position: 'relative',
    marginTop: 16,
  },

  input: {
    backgroundColor: colors.layoutBg,
    height: 50,
    borderColor: colors.shapeAccent,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 16,
    fontWeight: 'Medium',
    fontFamily: fonts.robo5,
    fontsize: 16,
    color: colors.mainText,
  },

  submitBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.mainAccent,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    // transform: [{ rotate: '90deg' }],
  },

  submitIcon: {},
});

export const commentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
    width: '100%',
  },

  image: { height: 28, width: 28, borderRadius: 50, marginRight: 16 },

  textWrap: {
    padding: 16,
    justifyContent: 'flex-start',
    // borderWidth: 1,
    // borderColor: 'black',
    backgroundColor: colors.layoutBg,
    borderRadius: 6,
  },

  text: {
    marginBottom: 8,
    // width: 285,
    // maxWidth: '100%',
    color: colors.mainText,
    fontSize: 13,
    fontFamily: fonts.robo4,
    lineHeight: 18,
  },
  date: {
    textAlign: 'right',
    color: colors.placeholder,
    fontSize: 10,
    fontFamily: fonts.robo4,
  },
});
