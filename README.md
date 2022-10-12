# mindata


# Iniciar proyecto
En caso de usar windows y querer utilizar make
https://absolutoyrelativo.com/como-se-hace/como-instalar-y-usar-make-en-windows-2/

# Creamos la imagen y lanzamos el contenedor, ademas instalamos un fake server para simular un servidor node
make init
# arrancamos servidor fake
json-server --watch db.json 

# Ruta a la app
http://localhost:8888


# INFORMACION SOBRE LA APLICACION

La app consta de un modulo llamado HeroModule que contiene los componetnes lista y el formulario de añadir heros,
un archivo store que gestiona el almacenamiento en local, un servicio para la gestionar las peticiones.
 # El servicio HeroApiService
    He tratado de usar todas las tecnologias de transmision de eventos, ya que se me hizo incapie en este tema, en
    una app real, no se utilizaria este modelo.

# STANDALONE_COMPONENTS
  Componentes de la nueva version de angular , los cuales no necesitan instanciarse a ningun modulo para poder usarse
    # Actions
        Genera una barra de herramientas con las opciones de editar y borrar
    # Alert
        Lanza un alert para que confirmemos el borrado de un item
    # Hero-filter
        Crea un input para poder filtar los heros por su nombre
    # Image
        Genera un componente para gestionar imagenes en un formulario.
# PIPES
    Carpeta pipes con un par de pipes referenciado a un modulo para poder se usados en cualquier modulo.
        # Gender pipe:
            Devuelve 'Hombre' o 'Mujer' dependiendo del booleano recibido.

        # img_not_found:
            Genera una url a una imagen por defecto en caso de que no se añada una imagen al formulario.
  # DIRECTIVES
    Directiva para generar mayusculas en caliente a escribir en un input

  # CUSTOM VALIDATORS
    Al utilizar el nombre del superhero como indice he creado un validador personalizado para envitar que se repitan nombres

  # INTERCEPTOR
        Captura cuando se hacer un peticion http y emite un evento que recoge app.componet y lanza un ngx spinner
        "Solo se lanza cuando hay una peticion http, hay que arrancar el server fake para que devuelva el listado de heroes por http"

  # DOCUMENTACION
    Ejecutar "compodoc -p tsconfig.doc.json" en la raiz del proyecto, una vez generada /documentation/index.html
 
