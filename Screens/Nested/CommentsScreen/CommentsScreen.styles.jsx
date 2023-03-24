import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../utils/styles';

export const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: colors.bgContent,
  },

  image: { height: 240, width: '100%', borderRadius: 8, marginBottom: 32 },
});

export const commentStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: colors.bgContent,
  },

  image: { height: 240, width: '100%', borderRadius: 8, marginBottom: 32 },
});
