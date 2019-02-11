import {authenticateGoogleAccount,
  createUserWithEmailAndPassword,
  createDocumentUserUid,
  authenticateEmailAndPassword,
  authenticateFacebookAccount,
  closeSesion,
  savePublication,
  consultPost,
  consultTypePost,
  UpdatedPost,
  deletePost,
  newAddLike
} from './lib/index.js';
import {changeTmp} from './lib/app.js';

export const changeHash = (hash) => {
  location.hash = hash;
  changeTmp(location.hash);
};  
export const consultPosts = () => {
  consultPost(showPosts);
};

const showPosts = (posts) => {
  const ul = document.querySelector('#notes-list');
  ul.innerHTML = '';
  posts.forEach((post) => {
    ul.appendChild(itemNote(post)); 
  });
};
export const consultTypePosts = (type) => {
  consultTypePost(type, showPosts);
};
export const deletePosts = (postId) => {
  deletePost(postId)
    .then(() => {
      console.log('Se eliminó el post');
    })
    .catch((error) => {
      console.log(error);
    });
};
export const UpdatedPosts = (postId, textNew) => {
  UpdatedPost(postId, textNew)
    .then(console.log('Se actualizó el post'))
    .catch((error) => {
      console.log(error);
    });
};


const saveData = (data) => {
  const uid = data.user.uid;
  const user = data.user.displayName;
  const email = data.user.email;
  createDocumentUserUid(uid, {uid, user, email})
    .then(() => {
      changeHash('#/home');
    })
    .catch((error) => {
      console.log(error);
    });
}; 

const saveDataWithEmail = (data) => {
  const uid = data.uid;
  const user = data.userName;
  const email = data.userEmail;
  createDocumentUID(uid, {uid, user, email});
  changeHash('#/home');
};
export const closedSesion = () => {
  closeSesion()
    .then(() => {
      changeHash('');
    })
    .catch();
};

export const authenticateWithGoogle = () => {
  authenticateGoogleAccount()
    .then((data) => saveData(data))
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};

export const goToRegister = () => {
  changeHash('#/registry');
};

export const signUpOnClick = () => {
  const name = document.querySelector('#nombres').value;
  const lastName = document.querySelector('#apellidos').value;
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  const nameNew = name + '  ' + lastName;
  if (email === '' || password === '' || name === '' || lastName === '') {
    showUncompletedErrors();
  } else if (email !== '' && password !== '' && name !== '' && lastName !== '') {
    createUserWithEmailAndPassword(email, password)
      .then(() => { 
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: nameNew,
        }).then(function() {
          const dataNew = {
            uid: user.uid,
            userEmail: user.email,
            userName: user.displayName
          };
          saveDataWithEmail(dataNew);
        }).catch(function(error) {
          showSignErrors(error);
        });
      })
      .catch((error) => showSignErrors(error));
  }
};

export const authenticateWithEmailAndPassword = () => {
  const email = document.querySelector('#txtEmail').value;
  const password = document.querySelector('#txtPassword').value;
  if (email === '' || password === '') {
    showUncompletedErrors();
  } else if (email !== '' && password !== '') {
    authenticateEmailAndPassword(email, password)
      .then((data) => saveData(data))
      .catch((error) => showLogErrors(error)); 
  }
};

export const authenticateFacebook = () => {
  authenticateFacebookAccount()
    .then((data) => saveData(data))
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        return 'Es el mismo usuario';
      }
    });
};

export const showSignErrors = (error) => {
  const errorCode = error.code;
  switch (errorCode) {
  case 'auth/email-already-in-use':
    document.querySelector('#emailError').innerHTML = 'Correo electrónico ya registrado';
    break;
  case 'auth/invalid-email':
    document.querySelector('#emailError').innerHTML = 'Correo electrónico inválido';
    break;
  case 'auth/weak-password':
    document.querySelector('#passwordError').innerHTML = 'Contraseña debe tener mínimo 6 dígitos';
    break;
  case 'error':
    document.querySelector('#emailError').innerHTML = 'Correo electrónico inválido';
    break;
  default: document.querySelector('#emailError').innerHTML = '';
  }  
};

export const showLogErrors = (error) => {
  const errorCode = error.code;
  switch (errorCode) {
  case 'auth/invalid-email':
    document.querySelector('#emailErrorLog').innerHTML = 'Correo electrónico inválido';
    break;
  case 'auth/user-not-found':
    document.querySelector('#emailErrorLog').innerHTML = 'Usuario no registrado';
    break;
  case 'auth/user-disabled':
    document.querySelector('#emailErrorLog').innerHTML = 'Correo electrónico deshabilitado';
    break;
  case 'auth/wrong-password':
    document.querySelector('#passwordErrorLog').innerHTML = 'Contraseña incorrecta';
    break;
  }
};
const showUncompletedErrors = () => document.querySelector('#uncompletedError').innerHTML = '<img id="iconUn" class="alert" src = "img/icon.png"/>' + 'Complete los campos requeridos';

export const publish = () => {
  const user = firebase.auth().currentUser.displayName;
  const enteredText = document.querySelector('#entered-text').value;
  const postType = document.querySelector('#post-type').value;
  if (enteredText !== '') {
    savePublication(user, enteredText, postType)
      .then((data) => consultPosts(data))
      .catch({});
  }
};

export const itemNote = (objNote) => {
  console.log(objNote.date);
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
    UpdatedPosts(objNote.id, textNew);
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
    deletePosts(objNote.id);
  });
  const btnDeniedDelete = liElement.querySelector('#btn-delete-negative');
  btnDeniedDelete.addEventListener('click', () => { 
    modalConfirmDelete.style.display = 'none';
  });
  let number = objNote.likes;
  const btnLike = liElement.querySelector(`#btnLike-${objNote.id}`);
  btnLike.addEventListener('click', () => {
    number = number + 1 ;
    newAddLike(objNote.id, number);
  });
  return liElement;
};