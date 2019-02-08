import {UpdatedPost, deletePost} from './index.js';
import { changeHash } from '../view_controller.js';

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
    UpdatedPost(objNote.id, textNew);
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
  return liElement;
};