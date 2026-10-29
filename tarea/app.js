class Tarea {
  constructor(nombre) {
    this.nombre = nombre;
    this.completada = false;
  }

  cambiarEstado() {
    this.completada = !this.completada;
  }

  obtenerDescripcion() {
    return this.nombre;
  }
}

const listaTareas = document.querySelector("#listaTareas");
const formTarea = document.querySelector("#formTarea");
const nuevaTarea = document.querySelector("#nuevaTarea");
const mensaje = document.querySelector("#mensaje");

const tareas = [
  new Tarea("Estudiar JavaScript"),
  new Tarea("Completar la bitácora"),
  new Tarea("Repasar el laboratorio"),
];

function mostrarTareas() {
  listaTareas.innerHTML = "";

  tareas.forEach((tarea, indice) => {
    const elemento = document.createElement("li");

    const textoTarea = document.createElement("span");
    textoTarea.textContent = tarea.obtenerDescripcion();

    if (tarea.completada) {
      textoTarea.style.textDecoration = "line-through";
    }

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = tarea.completada ? "Desmarcar" : "Completar";

    botonCompletar.addEventListener("click", () => {
      tarea.cambiarEstado();
      mensaje.textContent = tarea.completada
        ? "Tarea completada."
        : "Tarea marcada como pendiente.";
      mostrarTareas();
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
      const nombreEliminado = tarea.obtenerDescripcion();

      tareas.splice(indice, 1);

      mensaje.className = "mensaje exito";
      mensaje.textContent = `Se eliminó la tarea: ${nombreEliminado}.`;

      mostrarTareas();
    });

    elemento.appendChild(textoTarea);
    elemento.appendChild(botonCompletar);
    elemento.appendChild(botonEliminar);

    listaTareas.appendChild(elemento);
  });
}

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = nuevaTarea.value.trim();

  if (texto === "") {
    mensaje.className = "mensaje error";
    mensaje.textContent =
      "Error: debes escribir el nombre de una tarea antes de agregarla.";
    return;
  }

  tareas.push(new Tarea(texto));
  nuevaTarea.value = "";
  mensaje.className = "mensaje exito";
  mensaje.textContent = "Tarea agregada correctamente.";

  mostrarTareas();
});
mostrarTareas();
