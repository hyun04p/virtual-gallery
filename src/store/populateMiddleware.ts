import { Middleware } from 'redux';
import { loadWebContent } from './webContent';
// import app from 'firebase';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';

// const db = getFirestore(app);

export const populate: Middleware = (store) => (next) => (action) => {
  if (loadWebContent.match(action)) {
    // const docRef = doc(db, 'web-content', 'main');
    // getDoc(docRef).then((doc) => {
    //   const data = doc.data();
    //   store.dispatch(setCategories(data?.categories));
    //   store.dispatch(setImagesByCategories(data?.images_by_category));
    // });
  }
  next(action);
};
