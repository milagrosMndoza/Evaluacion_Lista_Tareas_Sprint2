var datos = 
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }];

function datos (){
 var listaTareas = document.getElementById("lista-tareas");
 listaTareas.innerHTML= "" ;
 var nuevoHTML = "";
 datos.forEach(function (tarea){
  nuevoHTML += "<li>" + tarea.title + "</li>"
 });
  listaTareas.innerHTml = nuevoHTML;
}

var info = document.getElementById('lista');
datos.forEach(function(elemento){
    
    
info.innerHTML += '<li>' + elemento.title + "</li>"; //Agrega  todas las tareas a mi lista
}); 

var agregarTarea = document.getElementById('agregarTarea');
agregarTarea.onclick = function (){

  var nuevaTarea=document.getElementById("tareas").value;
  if(tareas.value.length == "")
      alert("Debes ingresar una tarea");
  else{
      var listaLI=document.createElement("li");
      var textnode=document.createTextNode(nuevaTarea);
      listaLI.appendChild(textnode);
      document.getElementById("lista").appendChild(listaLI);
    }    
  tareas.value = "";
}

