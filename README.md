# TODOList

Este proyecto utiliza Vite como herramienta de construcción rápida para una aplicación de React con TypeScript.



> [!IMPORTANT]
> ## Requisitos previos
> Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde [nodejs.org](nodejs.org).
> ## Instalación
> Para comenzar con el proyecto, sigue estos pasos:
> 1. Clona este repositorio en tu máquina local.
> 2. Navega al directorio del proyecto.
> 3. Instala las dependencias necesarias ejecutando el siguiente comando:
> #### npm install
> ## Ejecutar el proyecto
> Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo con el siguiente comando:
> #### npm run dev

</br>

> [!NOTE]
> Para comprobar los endpoints a utilizar y sus contratos se usó el propio Swagger de la API

</br>


> [!NOTE]
> ## Funcionalidad implementada
> El usuario puede hacer login si ya tiene una cuenta o hacer signup si no está registrado.
> 
> Si se hace signup, se redirige directamente al login.
> 
> Una vez logeado, el usuario puede ver el username con el que está logeado y hacer logout.
> 
> Estas opciones se encuentran en el header.
> 
> También se presenta la lista de tareas agrupadas por estatus. Hay tres pestañas que separan las tareas.
> 
> Se ha incluido una opción para filtrar solo las tareas creadas por el usuario logueado.
> 
> Si se clicka en una tarea, se pueden ver sus detalles y modificar el nombre, la descripción y el estado.
> 
> También es posible añadir una tarea nueva rellenando el nombre y la descripción.
> 
> Se ha optado por crear todas las tareas nuevas en el estado "Not Started".

</br>


> [!NOTE]
> ## Posibles mejoras de la aplicación
> Se ha optado por definir los estados de las tareas de forma estática.
> 
> - La primera mejora sería obtener los estados de la api y que así fueran dinámicos, ya que ahora mismo si se añade uno nuevo, este no estaría reflejado y las tareas en ese estado no se mostrarían.
> 
> - Una mejora de usabilidad sería quitar las alertas informativas y añadir los mensajes en popups que desaparecieran después de unos pocos segundos.
> 
> - Otra mejora sería dar la opción de crear nuevas tareas en cualquier estado. Esto daría una mayor flexibilidad al usuario.
> 
> - La última mejora sería añadir más control de errores. Comprobando todas las posibles respuestas de la api y logando o mostrando los errores para dar mas información al usuario.
> 
> - Para que el código sea más legible, se podrían componetizar más algunos ficheros.

