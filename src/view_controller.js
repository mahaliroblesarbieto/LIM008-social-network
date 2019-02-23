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
  newAddLike,
  updatePasswordUser,
  userCurrent
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

const updatePasswordCurrentUser = (nameNew) => {
  updatePasswordUser(nameNew)
    .then(() => {
      console.log('Exito');
    })
    .catch((error) => console.log(error));
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
      .then((data) => { 
        saveData(data);
        updatePasswordCurrentUser(nameNew);
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
export const showNameUser = (nameUser) => {
  const user = nameUser;
  const enteredText = document.querySelector('#entered-text').value;
  const postType = document.querySelector('#post-type').value;
  if (enteredText !== '') {
    savePublication(user, enteredText, postType)
      .then((data) => consultPosts(data))
      .catch({});
  }
};
export const publish = () => {
  userCurrent(showNameUser);
};


export const showHide = (id) => {
  let x = window.matchMedia('(max-width: 768px)');
  if (x.matches) { // If media query matches
    if (document.getElementById) { // se obtiene el id
      let el = document.getElementById(id); // se define la variable "el" igual a nuestro div
      el.style.display = (el.style.display === 'none') ? 'block' : 'none'; // damos un atributo display:none que oculta el div
    }
  }
};

export const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  liElement.className = 'list-post';
  const date = (objNote.date.toDate()).toString();
  const newDate = date.substr(4, date.length - 37);
  liElement.innerHTML = `
  <div class="row post-bar background-principal width" >
    <div class="col-12 col-s-12 border-buttom null-padding-bottom">
      <div class="row">
        <div class="col-1 col-s-1 xscol-2">
          <img src="./img/user.png" alt = "fotouser" />
        </div>
        <div class="col-10 col-s-10 xscol-8">
          <p class="null-margin-top post-name-user">${objNote.uid}</p>
          <p class="null-margin-top post-name-date"> ${newDate} </p>
        </div>
        <div class="col-1 col-s-1 xscol-1">
          <img id ="typeimage" src = ".img/" alt = "type" /> 
        </div>
      </div>
    </div>
    <div class="col-12 col-s-12 border-buttom" >
      <div class="row col-12 col-s-12">
      <form>
        <textarea class="textarea-style-div width" id="my-post-${objNote.id}" readonly>${objNote.text}</textarea>
        <div class="col-10 col-s-10 xscol-8">
        </div>
        <div class="col-2 col-s-2 xscol-4">
            <button type = "button" id = "btnSave-${objNote.id}" class="login width btn-post box-shadow">Guardar</button>
        </div>
      </form>
      </div>
    </div>
    <div class="col-12 col-s-12" style="padding-bottom: 0% ; padding-top: 0%">
      <div class="row">
        <div class="col-12 col-s-12 ">
          <div class="col-4 col-s-4 xscol-4 ">
            <button type = "button" id = "btnLike-${objNote.id}"  class="btn-like background-principal box-shadow font-like">Like 
            </button> <span class="post-total-like registry">${objNote.likes}</span>
          </div>
          <div class="col-2 col-s-2 xscol-2">
          </div>
          <div class="col-2 col-s-2 xscol-2">
          <button type = "button" id = "btnComment-${objNote.id}" class="login width btn-post box-shadow">Comentar</button>
          </div>
          <div class="col-2 col-s-2 xscol-2">
            <button type = "button" id = "btnUpdate-${objNote.id}" class="login width btn-post box-shadow"><i class="far fa-edit"></i></button>
          </div>
          <div class="col-2 col-s-2 xscol-2">
            <button type = "button" id = "btnDelete-${objNote.id}"  class="registry width btn-post box-shadow"><i class="far fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    </div> 
    <div id = "template-comment" class="col-12 col-s-12" style="padding-bottom: 0% ; padding-top: 0%">
      <div class="row">
        <div class="col-11 col-s-11 xscol-11">
          <textarea class="textarea-style-div width" id="my-comment"></textarea>
        </div>
        <div class="col-1 col-s-1 xscol-1">
          <button type = "button" id = "btn-show-comment"  class="registry width btn-post box-shadow"><i class="fas fa-caret-right"></i></button>
        </div>
      </div>
    </div>
    <div id = "show-comment" class="col-12 col-s-12" style="padding-bottom: 0% ; padding-top: 0%">
    </div>
  </div>
  <div id="myModaldos" class="modal width">
    <!-- Modal content -->
    <div class="modal-content">
      <p>¿Estas seguro que deseas eliminar? </p>
      <div class="row">
        <div class="col-12 col-s-12">
          <div class="col-8 col-s-8 xscol-2">
          </div>
          <div class="col-2 col-s-2 xscol-5">
            <button type = "button" id = "btn-delete-confirm"  class="registry width btn-post box-shadow">Si</button>
          </div>
          <div class="col-2 col-s-2 xscol-5">
            <button type = "button" id = "btn-delete-negative"  class="select-post width box-shadow">No</button>
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
  const btnSave = liElement.querySelector(`#btnSave-${objNote.id}`);
  btnSave.style.display = 'none';
  btnUpdatePost.addEventListener('click', () => {
    const myPost = liElement.querySelector(`#my-post-${objNote.id}`);
    myPost.readOnly = false; 
    btnSave.style.display = 'block';
  });
  btnSave.addEventListener('click', () => {
    const myPost = liElement.querySelector(`#my-post-${objNote.id}`);
    const textNew = myPost.value;
    UpdatedPosts(objNote.id, textNew);
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
  const btnCommentPost = liElement.querySelector(`#btnComment-${objNote.id}`);
  const templateComment = liElement.querySelector('#template-comment');
  templateComment.style.display = 'none';
  btnCommentPost.addEventListener('click', () => {
    templateComment.style.display = 'block';
  });
  const btnshowComment = liElement.querySelector('#btn-show-comment');
  btnshowComment.addEventListener('click', () => {
    const itemComment = (comment) => {
      const liElement = document.createElement('div');
      liElement.innerHTML = `<div class = row> ${comment}</div>`;
      return liElement;
    };
    let textComment = liElement.querySelector('#my-comment');
    const myComment = textComment.value;
    textComment.innerHTML = '';
    const divElement = document.querySelector('#show-comment');
    divElement.appendChild(itemComment(myComment));
    return divElement; 
  }); 
  return liElement;
};