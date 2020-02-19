const shoppingCart = document.getElementById('carrito');
const coursesList = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const dropOffShoppingCartBtn = document.getElementById('vaciar-carrito');

// Run.
loadEventListeners();

// Listeners.
function loadEventListeners(){
  // Trigger when 'Agregar Carrito' button is pushed.
  coursesList.addEventListener('click', buyCourse);

  // Trigger when 'remove item from card -> X' is pressed.
  shoppingCart.addEventListener('click', removeCourse);

  // Trigger the 'vaciar-carrito button.
  dropOffShoppingCartBtn.addEventListener('click', dropOffShoppingCart);
}

// Functions.

function buyCourse(e){
  e.preventDefault();
  // Delagation to buy button.
  if(e.target.classList.contains('agregar-carrito')){
    const course = e.target.parentElement.parentElement;
    readDataCourse(course); 
  }
}

// Read course data and save it as object.
function readDataCourse(course){
  const dataCourse = {
    imagen: course.querySelector('img').src,
    titulo: course.querySelector('h4').textContent,
    precio: course.querySelector('.precio span').textContent,
    id: course.querySelector('a').getAttribute('data-id')
  }

  insertShoppingCart(dataCourse);
}

// Insert object into the html table (Shpping Cart).
function insertShoppingCart(course){
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><img src="${course.imagen}" width="100"></td>
    <td>${course.titulo}</td>
    <td>${course.precio}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${course.id}">
      X</a>
    </td>
  `;
  listaCursos.appendChild(row);
}

function removeCourse(e){
  e.preventDefault();
  if(e.target.classList.contains('borrar-curso')){
    e.target.parentElement.parentElement.remove();
  }
}

// Drop off all courses of the shopping cart.
function dropOffShoppingCart(){
  while(listaCursos.firstChild){
    listaCursos.removeChild(listaCursos.firstChild);
  }
  return false;
}