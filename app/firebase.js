import { initializeApp } from "firebase/app";

import { getDatabase, ref, child, get, set } from "firebase/database";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD3BzUV9odI-NMoIzTQTsyJLnRJk_GZ9A",
  authDomain: "systemvetardagen-b8001.firebaseapp.com",
  databaseURL: "https://systemvetardagen-b8001-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "systemvetardagen-b8001",
  storageBucket: "systemvetardagen-b8001.appspot.com",
  messagingSenderId: "823048218693",
  appId: "1:823048218693:web:626b630eb845e88b1d9b2c",
  measurementId: "G-CF5N3Z1BGY"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = ref(db);

const storage = getStorage();

export const getDataFromDataBase = async (path) => {
  try {
    let data = false;
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      data = snapshot.val();
      console.log("Fetched data:", data);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const writeToDataBase = async (path, data) => {
  try {
    const response = await set(ref(db, 'companies/' + path), data);
    console.log(response)
  } catch (error) {
    throw error;
  }
};

export const uploadDataToStorage = async (path, file) => {
  try {
    const storageRef = sRef(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref)
    console.log(url)
    return url;
  } catch (error) {
    throw error;
  }
};
