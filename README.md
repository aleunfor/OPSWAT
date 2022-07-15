# OPSWAT
 Test for e-virtus

## Packages npm usados

Framework Express \
dotenv (Para variables de entorno)  \
mongoose (Conexión a MongoDB) \
node-fetch (Conexión a API) \
nodemon (Modo desarrollo) \
winston (Para logs) \
jest/supertest (Test unitarios)

## Servicios usados

railway.app (Servicio gratuito para tests de almacenamiento en MongoDB)

## .env (Variables de entorno usadas)

API_KEY= (Clave que se me otorgó para obtener los threats)\
ENDPOINT= (URL de consulta de los threats)\
MONGO_URI=mongodb://mongo:g9SE9yWDWL3CvRWBHtfO@containers-us-west-85.railway.app:6314 (URI de conexión a railway.app)\
NODE_ENV= (Entorno de la aplicación):
 - test
 - dev
 - production

En el directorio del proyecto, se inicia con el comando: 

### `npm run start`

Modo desarrollo:

### `npm run dev`

Tests:

### `npm run test`

## Endpoints

GET /api/threat/getallthreats (Obtiene todos los threats y los almacena en la BD) \
GET /api/threat/getthreat/(:threat_id) (Obtiene el threat por "threat_id" que indiquemos por parámetro) \
POST /api/threat/deletethreat/(:threat_id) (Elimina el threat por "threat_id" que indiquemos por parámetro)

## Descripción

Aplicación desarrollada con NodeJS, que tiene como por objetivo\
consultar una API donde todos los "threats" se guardan en una base de datos,\
MongoDB en este caso, cada vez que el endpoint /api/threat/getallthreats es consultado\
se obtienen todos los threats y son guardados en la BD, si algún threat ya está almacenado\
sólo se aumentará el campo "counter" en 1. Además de poder consultar y eliminar los threats\
almacenados según su "threat_id".

Dentro del desarrollo me vi con la incertidumbre de usar algunas librerías npm\
que anteriormente no había ocupado, tales como winston o jest,\
lo que es winston, no lo había ocupado antes, leyendo la documentación\
y poniendolo en práctica ahora me parece más sencillo y\
puedo ver claramente lo que pasa dentro de la misma aplicación, tengo un mejor control,\
dentro del testing (jest) aún me estoy familiarizando para implementar mejores prácticas,\
además de entregar un código limpio sin vulnerabilidades. 

Me pareció un reto entretenido donde pude ejercer algunas de mis habilidades\
y ampliar mi conocimiento por los mismos requisitos de la aplicación.

