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
const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  const date = (objNote.date.toDate()).toString();
  const newDate = date.substr(4, date.length - 37);
  liElement.innerHTML = `
  <div class="row">
 <div class="col-12 col-s-12">
   <span>${objNote.uid}</span>
   <span>${newDate}</span>
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
  
  const btnUpdatePost = liElement.querySelector(`#btnUpdate-${objNote.id}`);
  const modalUpdatePost = liElement.querySelector('#myModal');
  btnUpdatePost.addEventListener('click', () => {
    modalUpdatePost.style.display = 'block';
  });
  const btnUpdateContent = liElement.querySelector('#btn-update-content');
  btnUpdateContent.addEventListener('click', () => {
    const textNew = liElement.querySelector('#post-content').value;
    console.log(objNote.id);
    UpdatedPost(objNote.id, textNew);
  });
  const btndeletePost = liElement.querySelector(`#btnDelete-${objNote.id}`);
  console.log(btndeletePost);
  const modalConfirmDelete = liElement.querySelector('#myModaldos');
  btndeletePost.addEventListener('click', () => {
    modalConfirmDelete.style.display = 'block';
  });
  const btnConfirmDelete = liElement.querySelector('#btn-delete-confirm');
  btnConfirmDelete.addEventListener('click', () => {
    deletePost(objNote.id);
  });


  /* const btnDelete = liElement.querySelector(`#btnDelete-${objNote.id}`);
  btnDelete.addEventListener('click', () => {
    //deletePost(objNote.id);
  });*/

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
        // console.log(data);
      });
      data.forEach((post) => {
        ul.appendChild(itemNote(post)); 
      });
    });
};

