// Escribe aquí tu código JS

const tareaIpt = document.getElementById("tarea");  //busca el <input> que tiene tarea
const formBtn = document.getElementById("agregarTarea"); // busca el botón
const listaTareas = document.getElementById("listaTareas"); // busca la lista donde aparecerán las tareas

formBtn.addEventListener("click", (e) => {          // cuando se hace click, se ejecuta la función
   let tarea = tareaIpt.value.trim();               // trim elimina espacios vacíos al inicio y al final

    if(tarea === "") {
        alert ("Debes escribir una tarea");
        return;

    } else {
        
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tarea;
        listaTareas.appendChild(nuevaTarea);

        tareaIpt.value = ""

    }// else 

});

