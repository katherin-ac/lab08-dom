const listaTareas = document.querySelector("#listaTareas");

const tareas = [
  "Estudiar JavaScript",
  "Completar la bitácora",
  "Repasar el laboratorio",
];

tareas.forEach((tarea) => {
  const elemento = document.createElement("li");

  elemento.textContent = tarea;

  listaTareas.appendChild(elemento);
});
