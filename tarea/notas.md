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

| Concepto         | Dónde se usó                                                     | Para qué                                                              |
| ---------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| DOM              | document.querySelector() y document.createElement()              | Para seleccionar elementos, crear tareas y agregarlo a la lista       |
| Eventos          | addEventListener("submit", ...) y addEventListener("click", ...) | Para agregar tareas al enviar el formulario y marcarlas o eliminarlas |
| Clases y objetos | cambiarEstado() , obtenerDescripcion() , Tarea() y class Tarea() | Para poder crear cada tarea con un atributo definido                  |

## Pruebas realizadas

| Acción realizada            | Resultado esperado                                            | Resultado obtenido                                    | ¿Cumple? |
| --------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- | -------- |
| Abrir la página             | Se muestran las tres tareas iniciales.                        | Se muestran las tres tareas iniciales.                | Sí       |
| Agregar una tarea con texto | La tarea nueva aparece en la lista.                           | La tarea aparece en la lista sin recargar la página.  | Sí       |
| Enviar el formulario vacío  | Aparece un mensaje de validación y no se agrega ninguna tarea | Aparece el mensaje solicitando escribir una tarea     | Sí       |
| Completar una tarea         | El texto de la tarea aparece tachado                          | El texto aparece marcado al pulsar "Completar"        | Sí       |
| Desmarcar una tarea         | El texto vuelve a mostrarse normalmente                       | El texto deja de estar tachado al pulsar «Desmarcar». | Sí       |
| Eliminar una tarea          | La tarea desaparece de la lista                               | La tarea desaparece al pulsar "Eliminar"              | Sí       |

## Por que disene asi mi clase

Diseñé la clase Tarea con los atributos "nombre" y "completada" porque cada tarea necesita almacenar su descripción y su estado. El método cambiarEstado() permite marcar una tarea como completada obtenerDescripcion() devuelve el nombre de la tarea para mostrarlo en la lista de la página. Cada tarea termina siendo un objeto con sus propios datos y comportamiento, para organizar y modificar la lista de forma mas sencilla.
