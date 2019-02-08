import {changeHash} from '../view_controller.js';
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

const newAddLike = (id, newLike) => {
  firebase.firestore().collection('Posts').doc(id).update({
    'likes': newLike
  });
};

const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  const date = (objNote.date.toDate()).toString();
  const newDate = date.substr(4, date.length - 37);

  liElement.innerHTML = `
  <div class="row">
 <div class="col-12 col-s-12">
   <p>${objNote.uid}, ${newDate} <img id ="typeimage"> </img></p>
 </div>
</div>
<div class="row">
 <div class="col-12 col-s-12">
   <span>${objNote.text}</span>
 </div>
</div>
<div class="row">
 <div class="col-12 col-s-12">
   <div class="col-2 col-s-2">
     <button type = "button" id = "btnUpdate-${objNote.id}"  class="type logIn border">Editar</button>
   </div>
   <div class="col-2 col-s-2">
     <button type = "button" id = "btnDelete-${objNote.id}"  class="type logIn border">Eliminar</button>
   </div>
   <div class="col-2 col-s-2">
     <button type = "button" id = "btnLike-${objNote.id}"  class="type logIn border"><p id="number"> ${objNote.likes}</p>Me gusta</button>
   </div>
   <div class="col-2 col-s-2">
   </div>
   <div class="col-2">
   </div>
   <div class="col-2">
   </div>
 </div>
</div>
<div id="myModal" class="modal">
 <!-- Modal content -->
 <div class="modal-content">
   <textarea rows="4" cols="50" id="post-content">
     ${objNote.text}
   </textarea>
   <div class="row">
     <div class="col-12 col-s-12">
       <div class="col-2 col-s-2">
         <button type = "button" id = "btn-update-content"  class="type logIn border">Editar</button>
       </div>
       <div class="col-2 col-s-2">
         <button type = "button" id = "btn-close-modal"  class="type logIn border">Cerrar</button>
       </div>
     </div>
   </div>
 </div>
</div>

<div id="myModaldos" class="modal">
 <!-- Modal content -->
 <div class="modal-content">
    <p>¿Estas seguro que deseas eliminar? </p>
   <div class="row">
     <div class="col-12 col-s-12">
       <div class="col-2 col-s-2">
         <button type = "button" id = "btn-delete-confirm"  class="type logIn border">Si</button>
       </div>
       <div class="col-2 col-s-2">
         <button type = "button" id = "btn-delete-negative"  class="type logIn border">No</button>
       </div>
     </div>
   </div>
 </div>
</div>`;
  if (objNote.public === 'true') {
    liElement.querySelector('#typeimage').src = 'img/world.png';
  } else {
    liElement.querySelector('#typeimage').src = 'img/animal-prints.png';
  }
  
  const btnUpdatePost = liElement.querySelector(`#btnUpdate-${objNote.id}`);
  const modalUpdatePost = liElement.querySelector('#myModal');
  btnUpdatePost.addEventListener('click', () => {
    modalUpdatePost.style.display = 'block';
  });
  const btnUpdateContent = liElement.querySelector('#btn-update-content');
  btnUpdateContent.addEventListener('click', () => {
    const textNew = liElement.querySelector('#post-content').value;
    UpdatedPost(objNote.id, textNew);
  });

  const btnCancelUpdate = liElement.querySelector('#btn-close-modal');
  btnCancelUpdate.addEventListener('click', () => {
    modalUpdatePost.style.display = 'none';
  });
  const btndeletePost = liElement.querySelector(`#btnDelete-${objNote.id}`);
  const modalConfirmDelete = liElement.querySelector('#myModaldos');
  btndeletePost.addEventListener('click', () => {
    modalConfirmDelete.style.display = 'block';
  });
  const btnConfirmDelete = liElement.querySelector('#btn-delete-confirm');
  btnConfirmDelete.addEventListener('click', () => {
    deletePost(objNote.id);
  });

  const btnDeniedDelete = liElement.querySelector('#btn-delete-negative');
  btnDeniedDelete.addEventListener('click', () => { 
    changeHash('#/home');
  });
  let number = objNote.likes;
  const btnLike = liElement.querySelector(`#btnLike-${objNote.id}`);
  btnLike.addEventListener('click', () => {
    number = number + 1 ;
    newAddLike(objNote.id, number);
  });
  return liElement;
};

export const consultPost = () => {
  firebase.firestore()
    .collection('Posts')
    .orderBy('date', 'desc')
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

export const consultTypePost = (type) => {
  console.log('a');
  firebase.firestore()
    .collection('Posts')
    .orderBy('date', 'desc')
    .where('public', '==', type)
    .onSnapshot(querySnapshot => {
      console.log('b');
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
  
