# Tarea: Mi componente interactivo

## Componente elegido

Lista de tareas

## Version 1: solo DOM

#### Código principal

```const listaTareas = document.querySelector("#listaTareas");

const tareas = [
  "Estudiar JavaScript",
  "Completar la bitácora",
  "Repasar el laboratorio"
];

tareas.forEach((tarea) => {
  const elemento = document.createElement("li");
  elemento.textContent = tarea;
  listaTareas.appendChild(elemento);
});
```

Una lista de tareas simple con tres tareas cargadas automaticamente mostradas mediante JavaScript.

## Version 2: con eventos

#### Código

```formTarea.addEventListener("submit", (evento) => {
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
```

Eventos submit y click para agregar y eliminar tareas mediante un formulario. Incluye validación de entrada cuando esté vacía.

## Version 3: con clases y objetos

```class Tarea {
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
```

Se agregó la clase tarea, atributos y métodos. Se pueden marcar y desmarcar tareas. Hay un mensaje de validación debajo del input.

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase
