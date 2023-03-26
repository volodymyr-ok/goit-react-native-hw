import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Alert } from 'react-native';
import { storage } from '../firebase/config';

export const uploadFile = async (uri, collection) => {
  try {
    if (!collection) throw new Error("Collection's name is not defined.");
    const response = await fetch(uri); // конвертація файлу у формат для запиту
    const file = await response.blob(); // конвертація формату самого файлу
    const fileID = Date.now().toString(); // майбутня назва файлу, ідентифікатор
    const fileRef = ref(storage, `${collection}/${fileID}`); // налаштування для навігації за файлом
    await uploadBytes(fileRef, file); // вивантаження файлу. повертає метадані
    return await getDownloadURL(fileRef); // посилання на файл
  } catch (err) {
    Alert.alert('Error', `${err.message}`);
  }
};
