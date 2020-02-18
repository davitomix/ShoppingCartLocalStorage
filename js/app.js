const shoppingCart = document.getElementById('carrito');
const coursesList = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

// Run.
loadEventListeners();

// Listeners.
function loadEventListeners(){
  // Trigger when 'Agregar Carrito' button is pushed.
  coursesList.addEventListener('click', buyCourse);
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
  
}