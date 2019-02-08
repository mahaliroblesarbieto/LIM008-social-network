import { itemNote } from '../view_controller.js';
export const authenticateGoogleAccount = () => 
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // .addScope('https://www.googleapis.com/auth/plus.login'));

export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
  
export const authenticateEmailAndPassword = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password);

export const authenticateFacebookAccount = () => 
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()) ;
  // .addScope('public_profile')); 

export const closeSesion = () => firebase.auth().signOut();

export const savePublication = (name, text, type) => 
  firebase.firestore().collection('Posts').add({
    uid: name, 
    text: text,
    public: type,
    likes: 0, 
    date: firebase.firestore.FieldValue.serverTimestamp()
  });

export const UpdatedPost = (id, textNew) => {
  let refUser = firebase.firestore().collection('Posts').doc(id);
  refUser.update({
    text: textNew
  });
};

export const deletePost = (postId) => {
  firebase.firestore().collection('Posts').doc(postId).delete()
    .then(() => {
    // consultPost();
    //      abrir una ventana modal que pida confirmar
    //      imprimir la nueva data en los templates
      console.log('Es exitoso');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const newAddLike = (id, newLike) => {
  firebase.firestore().collection('Posts').doc(id).update({
    'likes': newLike
  });
};

export const consultPost = (callback) => {
  firebase.firestore()
    .collection('Posts')
    .orderBy('date', 'desc')
    .onSnapshot(querySnapshot => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
    });
  callback(data);
};

export const consultTypePost = (type) => {
  console.log('a');
  firebase.firestore()
    .collection('Posts')
    .orderBy('date', 'desc')
    .where('public', '==', type)
    .onSnapshot(querySnapshot => {
      console.log('b');
    
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      data.forEach((post) => {
        ul.appendChild(itemNote(post)); 
      });
    });
};
  