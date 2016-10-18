import * as firebase from 'firebase';

import ReactNative from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

const firebaseConfig = {
  apiKey: "AIzaSyA-4UQyJ2wfj9OfgX4zkTQeFscFxGQ_agE",
  authDomain: "localhost",
  databaseURL: "https://hoops-21a72.firebaseio.com",
  storageBucket: "hoops-21a72.appspot.com",
};

export default firebase;

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseDb = firebaseApp.database().ref();

export const firebaseStorage = firebaseApp.storage();

const ReadImageData = ReactNative.NativeModules.ReadImageData;
/* global Blob */
window.Blob = RNFetchBlob.polyfill.Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;

/*
 * We need to replace the in-build fetch() API since we are messing around
 * with XMLHttpRequest.
 * https://github.com/wkh237/react-native-fetch-blob/wiki/Fetch-API#rnfb-as-fetch
 */
window.fetch = new RNFetchBlob.polyfill.Fetch({
    // enable this option so that the response data conversion handled automatically
    auto : true,
    // when receiving response data, the module will match its Content-Type header
    // with strings in this array. If it contains any one of string in this array,
    // the response body will be considered as binary data and the data will stored
    // in file system instead of in memory.
    // By default, it only store response data to file system when Content-Type
    // contains string `application/octet`.
    binaryContentTypes : [
        'image/',
        'video/',
        'audio/',
        'foo/',
    ]
}).build();

export const uploadImage = (uri, location) => {
  return new Promise((resolve, reject) => {
    let storageRef = firebaseStorage.ref(location);

    ReadImageData.readImage(uri, (image) => {
      Blob.build(image, {type : 'image/jpeg;base64'}).then((blob) => {
        storageRef.put(blob, {contentType: 'image/jpeg'}).then(function(snapshot) {
          blob.close();
          resolve({ref: location});
        });
      });
    });
  });
};
