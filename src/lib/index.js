export const authenticateGoogleAccount = () => 
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
  
export const authenticateEmailAndPassword = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password);

export const authenticateFacebookAccount = () => 
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()) ;

export const closeSesion = () => firebase.auth().signOut();

export const savePublication = (name, text, type) => 
  firebase.firestore().collection('Posts').add({
    uid: name, 
    text: text,
    public: type,
    likes: 0, 
    date: firebase.firestore.FieldValue.serverTimestamp()
  });

export const UpdatedPost = (postId, textNew) => 
  firebase.firestore().collection('Posts').doc(postId).update({
    text: textNew
  });

export const deletePost = (postId) => 
  firebase.firestore().collection('Posts').doc(postId).delete();

export const newAddLike = (id, newLike) => 
  firebase.firestore().collection('Posts').doc(id).update({
    'likes': newLike
  });

// 
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
console.log(callback(data));
export const consultTypePost = (type, callback) =>
  firebase.firestore()
    .collection('Posts')
    .orderBy('date', 'desc')
    .where('public', '==', type)
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
      });
      callback(data);
    });

export const createDocumentUserUid = (id, data) => 
  firebase.firestore().collection('users').doc(id).set({
    id: data.uid,
    nameUser: data.user,
    emailUser: data.email
  });

export const updatePasswordUser = (nameNew) => { 
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: nameNew,
  });
};

export const userCurrent = (callback) => {
  const nameUser = firebase.auth().currentUser.displayName;
  callback(nameUser);
};

// export const getUsers = (callback) =>
//   firebase.firestore().collection('users')
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() })
//       });
//       callback(data);
//       return data;
//     }); 