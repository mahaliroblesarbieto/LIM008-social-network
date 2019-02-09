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
// FALTA CLOSE SESION
export const closeSesion = () => firebase.auth().signOut();

export const savePublication = (name, text, type) => 
  firebase.firestore().collection('Posts').add({
    uid: name, 
    text: text,
    public: type,
    likes: 0, 
    date: firebase.firestore.FieldValue.serverTimestamp()
  });

export const UpdatedPost = (postId, textNew) => {
  return firebase.firestore().collection('Posts').doc(postId).update({
    text: textNew
  });
};

export const deletePost = (postId) => {
  return firebase.firestore().collection('Posts').doc(postId).delete();
};
export const newAddLike = (postId, newLike) => {
  return firebase.firestore().collection('Posts').doc(postId).update({
    'likes': newLike
  });
};
// FALTA TESTEAR CONSULT POST
export const consultPost = (callback) =>
  firebase.firestore().collection('Posts')
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
      });
      callback(data);
    }); 

/* export const consultPost = () => {
  firebase.firestore().collection('Posts')
    .orderBy('date', 'desc')
    .onSnapshot(querySnapshot => {
      const ul = document.querySelector('#notes-list');
      ul.innerHTML = '';
    7  const data = [];
     / querySnapshot.forEach((doc) => {
     /   data.push({ id: doc.id, ...doc.data() });
      });
      data.forEach((post) => {
        ul.appendChild(itemNote(post)); 
      });
    });
};*/
/* export const consultPost = () => 
  firebase.firestore().collection('Posts')
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {

    });*/
// FALTA CONSULT TYPE POST
export const consultTypePost = (type) => {
  firebase.firestore()
    .collection('Posts')
    .orderBy('date', 'desc')
    .where('public', '==', type)
    .onSnapshot(querySnapshot => {
      const ul = document.querySelector('#notes-list');
      ul.innerHTML = '';
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      data.forEach((post) => {
        ul.appendChild(itemNote(post)); 
      });
    });
};