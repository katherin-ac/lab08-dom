# Auditoría UX de la aplicación Lista de tareas

## 1. Objetivo

Evaluar la experiencia de usuario (UX) y la interfaz de usuario (UI) de la aplicación Lista de tareas, identificando problemas de usabilidad y proponiendo soluciones que mejoren la interacción y la accesibilidad.

## 2. Tabla de auditoría UX

| Heurística de usabilidad                                | Problema identificado                                                                                    | Solución propuesta                                                              |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **1. Visibilidad del estado del sistema**               | La aplicación no muestra mensajes específicos al completar o eliminar una tarea.                         | Mostrar mensajes breves que confirmen las acciones realizadas.                  |
| **2. Correspondencia entre el sistema y el mundo real** | Los botones tienen nombres comprensibles, pero falta retroalimentación después de ejecutar las acciones. | Utilizar textos sencillos y mensajes que expliquen el resultado de cada acción. |
| **3. Control y libertad del usuario**                   | La tarea se elimina inmediatamente y no existe una opción para recuperarla.                              | Solicitar confirmación antes de eliminar o permitir deshacer la accion.         |
| **4. Prevención de errores**                            | Los mensajes de validación pueden mejorarse para orientar al usuario.                                    | Mostrar mensajes claros cuando la entrada sea incorrecta.                       |
| **5. Reconocimiento antes que recuerdo**                | El campo de texto utiliza un texto de ejemplo, pero no tiene una etiqueta permanente.                    | Agregar una etiqueta asociada al campo para identificarla.                      |

## 3. Mejoras propuestas según las leyes de usabilidad

| Ley de usabilidad | Problema o aspecto por mejorar                                                                 | Mejora propuesta                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Ley de Fitts**  | Los botones tienen poco espacio interno y pueden ser difíciles de seleccionar.                 | Aumentar el tamaño de los botones y sus áreas.                                               |
| **Ley de Hick**   | Las acciones deben identificarse fácilmente para evitar decisiones innecesariamente complejas. | Mantener las acciones principales claras, con etiquetas breves y consistentes.               |
| **Ley de Miller** | La información debe organizarse para facilitar su comprensión.                                 | Agrupar visualmente el formulario y la lista de tareas, manteniendo una estructura sencilla. |

## 4. Otros aspectos de mejora

| Aspecto                   | Situación identificada                                                         | Acción propuesta                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Retroalimentación**     | No todas las acciones muestran una confirmación.                               | Informar cuando se agrega, completa o elimina una tarea.                                                          |
| **Validación**            | Ya se impide registrar tareas vacías.                                          | Conservar la validación y mejorar la claridad de los mensajes.                                                    |
| **Consistencia visual**   | Los estilos son básicos y algunos controles tienen poco espaciado.             | Definir variables CSS para colores y espaciado.                                                                   |
| **Accesibilidad**         | El documento declara inglés como idioma, aunque el contenido está en español.  | Cambiar el atributo a `lang="es"`, asociar etiquetas a los campos y añadir indicadores visibles de foco.          |
| **Contraste y controles** | Es necesario comprobar el contraste y el tamaño de los elementos interactivos. | Verificar un contraste mínimo de 4.5:1 para texto normal y procurar áreas interactivas de al menos 44×44 píxeles. |

## 5. Conclusión

La aplicación permite agregar, completar y eliminar tareas, y cuenta con una validación básica para evitar entradas vacías. La auditoría identifica oportunidades para mejorar la retroalimentación, el control del usuario, la organización visual y la accesibilidad. Las mejoras propuestas buscan facilitar la interacción y ofrecer una experiencia más clara, consistente y cómoda.
