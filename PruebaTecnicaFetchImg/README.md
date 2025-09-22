Prueba técnica para Juniors y Trainees de React en Live Coding. APIs:

Facts Random: https://catfact.ninja/fact

Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API

Recuperar la primera palabra del hecho

Muestra una imagen de un gato con la primera palabra.

NOTA:
En esta prueba voy a usar fetch y no voy a user el template de Vite. Voy a instalar lo minimo
para configurar yo desde cero. Asi creamos el punto de entrada de toda app React. Usamos Vanilla

Paso 1: comando npm create vite@latest

Paso 2: Instalar el plugin de Vite (igual hay que configurarlo): npm install @vitejs/plugin-react -E (flag -E para la tener la version exacta. Asi no se instala por ejeplo "^7.1.7" y se evitan actulizaciones inesperadas)

Paso 3: Instalar las dependencias necesarias de react
    A- react (la biblioteca en si)
    B- react-dom (tiene bindings con el navegador)
    comando npm install react react-dom -E

Paso 4: Configurar Vite
    Crear el archivo vite.config.js en la raiz del proyecto.
    Crear las 5 lineas necesarias y ya
    1- importar el defineConfig desde vite
    2- importar react desde la libreria de Vite que instalamos (@vitejs/plagin-react)
    3 y 4- exportar por default ese defineConfig que importamos con el plugin de react 

Paso 5: Crear el punto de entrada de toda aplicacion react, el main.jsx
    1- Edito el archivo main.js que se creo al inicio con el template Vanilla
    2- Importo el creatRoot desde el react-dom/client
    3- Creo el objeto root a partir de ese creatRoot que importe
    4- Con el document.getElementById("app") obtengo el elemento html del index.html donde voy a "inyectar" el codigo de react
    5- Accedo a la funcion reder del objeto root.
    6- Cambio la extencion del main.js a jsx para que el plugin de vite lo pueda traspilar sin problemas
    7- Actualizo la referencia al main en el index.html con la nueva extencion. Osea, main.jsx

Paso 6: Muy importante instalar el plugin/libreria ESLint (slinter), en este caso instalamos standard con npm install standard -D 
    y configurar en el package.json la key eslintConfig para que lo encuentre, con "extends": "node_modules/standard/eslintrc.json"

Paso 7: Instalamos la libreria axios con npm install axios -E y la importamos con import axios from 'axios'

Paso 8: Hasta el punto 7 tenemos ya un proyecto react configurado desde cero con su archivo main.jsx como punto de entrada. Pero en este punto
    tenemos que crear el App.jsx e importarlo dentro de main.jsx para empezar con los puntos que piede la prueba. 

