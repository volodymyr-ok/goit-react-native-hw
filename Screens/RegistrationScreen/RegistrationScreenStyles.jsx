import { StyleSheet } from 'react-native';

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
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingHorizontal: 16,
  },
  pageTitle: {
    // fontFamily: 'Roboto-Medium',
    color: '#212121',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 33,
  },
  from: {
    marginBottom: 16,
  },
  profilePhoto: {
    position: 'absolute',
    top: -60,
    width: 120,
    height: 120,
    borderColor: '#123456',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  addPhotoBtn: {
    position: 'absolute',
    bottom: -120 + 14,
    right: -12,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    padding: 16,
    marginBottom: 16,
    minWidth: '100%',

    fontSize: 16,
  },
  passwordWrap: {
    marginBottom: 43,
    position: 'relative',
    justifyContent: 'center',
  },
  secureBtn: {
    position: 'absolute',
    right: 16,
  },
  submitBtn: {
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    paddingVertical: 16,
  },
  submitText: {
    textAlign: 'center',
    color: '#ffffff',
  },
  navigationText: {
    color: '#1B4371',
    textAlign: 'center',
  },
});
