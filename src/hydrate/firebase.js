const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyB4fv0EjhysgInPMVmq5ukOhVtXNs1ZxJo',
  authDomain: 'virtual-gallery-76e7b.firebaseapp.com',
  projectId: 'virtual-gallery-76e7b',
  storageBucket: 'virtual-gallery-76e7b.appspot.com',
  messagingSenderId: '252658090488',
  appId: '1:252658090488:web:2055e5d6252ad20521d60d',
  measurementId: 'G-DFRVP0X3TS',
};
firebase.initializeApp(firebaseConfig);

function getData(callback) {
  var db = firebase.firestore();

  let categories;
  let images_by_category;
  let about;
  let contact;

  db.collection('web-content')
    .doc('main')
    .get()
    .then((doc) => {
      const data = doc.data();
      categories = data.categories;
      images_by_category = data.images_by_category;
      about = data.about;
      contact = data.contact;
      callback({
        about,
        contact,
        categories,
        images_by_category,
      });
      return;
    })
    .catch((e) => console.log(e));
}

module.exports = getData;
