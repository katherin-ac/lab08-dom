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
const botonDeshacer = document.querySelector("#botonDeshacer");

const tareas = [
  new Tarea("Estudiar JavaScript"),
  new Tarea("Completar la bitácora"),
  new Tarea("Repasar el laboratorio"),
];
let tareaEliminada = null;
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
      const confirmar = confirm(
        `¿Estás seguro de que deseas eliminar la tarea "${tarea.obtenerDescripcion()}"?`,
      );

      if (!confirmar) {
        return;
      }
      const nombreEliminado = tarea.obtenerDescripcion();
      tareaEliminada = {
        tarea: tarea,
        indice: indice,
      };

      tareas.splice(indice, 1);

      mensaje.className = "mensaje exito";
      mensaje.textContent = `Se eliminó la tarea: ${nombreEliminado}.`;
      botonDeshacer.hidden = false;
      mostrarTareas();
    });

    elemento.appendChild(textoTarea);
    elemento.appendChild(botonCompletar);
    elemento.appendChild(botonEliminar);

    listaTareas.appendChild(elemento);
  });
}
botonDeshacer.addEventListener("click", () => {
  if (tareaEliminada === null) {
    return;
  }

  tareas.splice(tareaEliminada.indice, 0, tareaEliminada.tarea);

  mensaje.className = "mensaje exito";
  mensaje.textContent = "Tarea recuperada correctamente.";

  tareaEliminada = null;
  botonDeshacer.hidden = true;

  mostrarTareas();
});
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
