const listaTareas = document.querySelector("#listaTareas");
const formTarea = document.querySelector("#formTarea");
const nuevaTarea = document.querySelector("#nuevaTarea");

const tareas = [
  "Estudiar JavaScript",
  "Completar la bitácora",
  "Repasar el laboratorio",
];

function mostrarTareas() {
  listaTareas.innerHTML = "";

  tareas.forEach((tarea, indice) => {
    const elemento = document.createElement("li");
    elemento.textContent = tarea + " ";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
      tareas.splice(indice, 1);
      mostrarTareas();
    });

    elemento.appendChild(botonEliminar);
    listaTareas.appendChild(elemento);
  });
}

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = nuevaTarea.value.trim();

  if (texto === "") {
    alert("Escribe una tarea antes de agregarla.");
    return;
  }

  tareas.push(texto);
  nuevaTarea.value = "";
  mostrarTareas();
});
mostrarTareas();
