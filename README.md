# aprendo-nodejs



### Inicializar el proyecto node
```
npm init
```




### instalar dependencias del proyecto
Rutas y protocolo HTTP
```
npm install --save express
```



Covertir datos de formulario a JSON
```
npm install --save body-parser
```



ORM para Mongo
```
npm install --save mongoose
```



Permitir subir ficheros <input type="file">
```
npm install --save connect-multiparty
```



Validar datos del lado backend
```
npm install --save validator
```




### En ambiente de DESARROLLO, reiniciar el servidor node cada vez que guarda
```
npm install --save-dev nodemon
```


Agregar script
```
"scripts": {
        "start": "nodemon index.js"
    },
```


Iniciar el script para que se reinicie el servicio al guardar un cambio
```
npm start
```



