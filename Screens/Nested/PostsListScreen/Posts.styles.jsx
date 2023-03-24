import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../utils/styles';

// borderColor: 'red', borderWidth: 1
export const listStyles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 32, backgroundColor: colors.bgContent },

  userBox: { flexDirection: 'row', marginBottom: 16 },

  userAva: { borderRadius: 16, resizeMode: 'cover', width: 60, height: 60 },

  userDetails: { paddingVertical: 16, paddingLeft: 8 },

  userName: { fontWeight: 'Bold', fontFamily: fonts.robo7, fontSize: 13, color: colors.mainText },

  userMail: { fontFamily: fonts.robo4, fontSize: 11, color: colors.nonAccent },
});

export const itemStyles = StyleSheet.create({
  container: { paddingVertical: 16 },

  image: { height: 240, width: '100%', borderRadius: 8, marginBottom: 8 },

  title: { marginBottom: 10, fontWeight: 'Bold', fontFamily: fonts.robo5, fontSize: 16 },

  details: { flexDirection: 'row', justifyContent: 'space-between' },

  btnContainer: { flexDirection: 'row', alignItems: 'center' },

  // color: colors.placeholder,
  commentsIcon: { color: colors.mainAccent, transform: [{ rotateY: '180deg' }], marginRight: 2 },
  commentsTotal: { color: colors.mainText, fontFamily: fonts.robo4, fontSize: 16 },

  locationIcon: { color: colors.placeholder, marginRight: 4 },
  locationName: {
    color: colors.mainText,
    fontFamily: fonts.robo4,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
