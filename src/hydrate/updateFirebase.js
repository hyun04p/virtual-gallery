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
var db = firebase.firestore();

const data = {
  categories: ['Overview', '산책', 'the last supper'],
  images_by_category: {
    Overview: [
      {
        height: 3540,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/the_last_supper_2.jpg?alt=media&token=93e5b62a-e4f8-4b52-8e08-61f3e5d62b88',
        width: 2362,
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8_19.jpg?alt=media&token=78057ab3-d26b-44ee-90c2-3bbe3d648a91',
        width: 2000,
        height: 1333,
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8_1.jpg?alt=media&token=cef49d4c-ab85-497e-97be-f1679de3ef3e',
        width: 1333,
        height: 2000,
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%83%E1%85%A1%E1%86%B1%E1%84%8B%E1%85%B3%E1%86%B7_8.jpg?alt=media&token=a90aa1cf-15c3-4b9b-9950-b38874922f0c',
        width: 5000,
        height: 3333,
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB_21.jpg?alt=media&token=278f3f20-28f8-4925-aa71-21e37578e6fd',
        width: 5027,
        height: 5027,
        type: 'image',
      },
      {
        width: 3848,
        height: 5760,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%AE%E1%86%A8_20.jpg?alt=media&token=d17068ee-a626-4d84-8480-e4d4b3a0ef50',
        type: 'image',
      },
      {
        width: 5793,
        height: 3862,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB_7.jpg?alt=media&token=017cb69b-c0e1-45ac-bd48-5587257ce58d',
        type: 'image',
      },
      {
        width: 3848,
        height: 5760,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%AE%E1%86%A8_30.jpg?alt=media&token=d994bb30-202d-4798-aac8-ffb7f4229108',
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%83%E1%85%A1%E1%86%B1%E1%84%8B%E1%85%B3%E1%86%B7_3.jpg?alt=media&token=4f9092bd-3dc8-4536-b28f-b1fded980cbb',
        width: 5000,
        height: 3333,
        type: 'image',
      },
    ],
    'the last supper': [
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8_1.jpg?alt=media&token=cef49d4c-ab85-497e-97be-f1679de3ef3e',
        width: 1333,
        height: 2000,
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%83%E1%85%A1%E1%86%B1%E1%84%8B%E1%85%B3%E1%86%B7_8.jpg?alt=media&token=a90aa1cf-15c3-4b9b-9950-b38874922f0c',
        width: 5000,
        height: 3333,
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB_21.jpg?alt=media&token=278f3f20-28f8-4925-aa71-21e37578e6fd',
        width: 5027,
        height: 5027,
        type: 'image',
      },
      {
        width: 3848,
        height: 5760,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%AE%E1%86%A8_20.jpg?alt=media&token=d17068ee-a626-4d84-8480-e4d4b3a0ef50',
        type: 'image',
      },
      {
        width: 5793,
        height: 3862,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB_7.jpg?alt=media&token=017cb69b-c0e1-45ac-bd48-5587257ce58d',
        type: 'image',
      },
      {
        width: 3848,
        height: 5760,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%AE%E1%86%A8_30.jpg?alt=media&token=d994bb30-202d-4798-aac8-ffb7f4229108',
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%83%E1%85%A1%E1%86%B1%E1%84%8B%E1%85%B3%E1%86%B7_3.jpg?alt=media&token=4f9092bd-3dc8-4536-b28f-b1fded980cbb',
        width: 5000,
        height: 3333,
        type: 'image',
      },
    ],
    산책: [
      {
        width: 3848,
        height: 5760,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%AE%E1%86%A8_20.jpg?alt=media&token=d17068ee-a626-4d84-8480-e4d4b3a0ef50',
        type: 'image',
      },
      {
        width: 5793,
        height: 3862,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB_7.jpg?alt=media&token=017cb69b-c0e1-45ac-bd48-5587257ce58d',
        type: 'image',
      },
      {
        width: 3848,
        height: 5760,
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%92%E1%85%A9%E1%84%80%E1%85%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%AE%E1%86%A8_30.jpg?alt=media&token=d994bb30-202d-4798-aac8-ffb7f4229108',
        type: 'image',
      },
      {
        data: 'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/%E1%84%83%E1%85%A1%E1%86%B1%E1%84%8B%E1%85%B3%E1%86%B7_3.jpg?alt=media&token=4f9092bd-3dc8-4536-b28f-b1fded980cbb',
        width: 5000,
        height: 3333,
        type: 'image',
      },
    ],
  },
};

db.collection('web-content').doc('main').set(data);
