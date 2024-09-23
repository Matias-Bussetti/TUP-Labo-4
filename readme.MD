# API con Express creada con Node.js para Proyecto 1 de Laboratorio IV

## Alumnos
- Matias Ezequiel Bussetti
- Juan Jose Chaparro
- Eric Ponin
- Diego Bruno
- Maria Eugenia Losada

## API DE MARVEL
**Alumno**: Juan Jose Chaparro (Requiere API KEY en el archivo `marvel.env`)

### Endpoints

1. **Obtener todos los personajes**
   - **GET**: `/api/v1/marvel/chars/all`
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/marvel/chars/all](https://tup-labo-4-grupo-15.onrender.com/api/v1/marvel/chars/all)

   **Descripción**: Retorna una lista de los primeros 100 personajes de Marvel.

   **Respuesta**:
   ```json
   {
     "status": "Ok",
     "data": [
       {
         "id": 1011334,
         "name": "3-D Man",
         "description": "",
         "modified": "2014-04-29T14:18:17-0400",
         "thumbnail": "path/to/thumbnail.jpg",
         "series": ["Series 1", "Series 2"]
       }
     ]
   }

2. **Obtener personajes por ID**
  - **GET**: `/api/v1/marvel/chars/:id`
  - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/marvel/chars/:id](https://tup-labo-4-grupo-15.onrender.com/api/v1/marvel/chars/:id)

    **Descripción**: Retorna la información de un personaje específico mediante su ID.
    **Parámetros**:
    **id (string)**: ID del personaje a buscar.
    **Respuesta**:
    ```json
    {
      "status": "Ok",
      "data": {
        "id": 1011334,
        "name": "3-D Man",
        "description": "",
        "modified": "2014-04-29T14:18:17-0400",
        "thumbnail": "path/to/thumbnail.jpg",
        "series": ["Series 1", "Series 2"]
      }
    }

3. **Obtener personajes con filtros. Query params**
  - **GET**: `/api/v1/marvel/chars?nameStartsWith=string&name=string&orderBy=string&limit=int&offset=int`
  - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/marvel/chars?nameStartsWith=string&name=string&orderBy=string&limit=int&offset=int](https://tup-labo-4-grupo-15.onrender.com/api/v1/marvel/chars?nameStartsWith=string&name=string&orderBy=string&limit=int&offset=int)

    **Descripción**: Retorna una lista de personajes filtrados por los parámetros especificados.

    **Parámetros de consulta**:
    **nameStartsWith (string)**: Filtra por nombres que empiezan con este texto.
    **name (string)**: Filtra por nombre exacto.
    **orderBy (string)**: Ordena por nombre o fecha de modificación. Para orden descendente, agrega un - antes del campo.
    **limit (int)**: Número de personajes a retornar (por defecto es 100).
    **offset (int)**: Número de personajes a omitir (por defecto es 0).

    **Respuesta**:
    ```json
    {
      "status": "Ok",
      "total": 100,
      "count": 100,
      "data": [
        {
          "id": 1011334,
          "name": "3-D Man",
          "description": "",
          "modified": "2014-04-29T14:18:17-0400",
          "thumbnail": "path/to/thumbnail.jpg",
          "series": ["Series 1", "Series 2"]
        },
        ......
      ]
    }

## API DE PACIENTES. 
**Alumno**: Matias Ezequiel Bussetti


## API DE CLIENTES. 
**Alumno**: Eric Ponin

### Endpoints  

1. **Obtener todos los clientes**  
   - **GET**: `/api/v1/clientes`  
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/clientes](https://tup-labo-4-grupo-15.onrender.com/api/v1/clientes)  

   **Descripción**: Retorna una lista de todos los clientes almacenados en el sistema.  

   **Respuesta**:  
   ```json
   {
     "msg": "Ok",
     "data": [
       {
         "fechaNac": "2024-09-20T01:23:37.207Z",
         "nombre": "Constance O'Connell",
         "direccion": "North",
         "dni": "3",
         "email": "Schuyler_OReilly@hotmail.com",
         "bip": false,
         "Genero": "male",
         "id": "2"
       },
       {
         "fechaNac": "2024-09-20T01:37:45.851Z",
         "nombre": "Vincent Morar",
         "direccion": "South",
         "dni": "5",
         "email": "Alexandro.Wiegand@gmail.com",
         "bip": false,
         "Genero": "male",
         "id": "4"
       }
     ]
   }
   ```  

2. **Obtener cliente por ID**  
   - **GET**: `/api/v1/clientes/buscar?id=string`  
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/clientes/buscar?id=string](https://tup-labo-4-grupo-15.onrender.com/api/v1/clientes/buscar?id=string)  

   **Descripción**: Retorna la información de un cliente específico según su ID.  

   **Parámetros de consulta (query params)**:  
   - `id (string)`: El ID del cliente a buscar.  

   **Respuesta**:  
   ```json
   {
     "msg": "Ok",
     "data": {
       "fechaNac": "2024-09-20T01:23:37.207Z",
       "nombre": "Constance O'Connell",
       "direccion": "North",
       "dni": "3",
       "email": "Schuyler_OReilly@hotmail.com",
       "bip": false,
       "Genero": "male",
       "id": "2"
     }
   }
   ```  

3. **Obtener clientes por género**  
   - **GET**: `/api/v1/clientes/genero?genero=string`  
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/clientes/genero?genero=string](https://tup-labo-4-grupo-15.onrender.com/api/v1/clientes/genero?genero=string)  

   **Descripción**: Filtra y retorna una lista de clientes basados en el género especificado.  

   **Parámetros de consulta (query params)**:  
   - `genero (string)`: Género por el cual se desea filtrar (e.g., `male`, `female`).  

   **Respuesta**:  
   ```json
   {
     "msg": "Ok",
     "data": [
       {
         "fechaNac": "2024-09-20T01:23:37.207Z",
         "nombre": "Constance O'Connell",
         "direccion": "North",
         "dni": "3",
         "email": "Schuyler_OReilly@hotmail.com",
         "bip": false,
         "Genero": "male",
         "id": "2"
       }
     ]
   }
   ```


## API DE POKEMON. 
**Alumno**: Diego Bruno


## API DE HARRY POTTER. 
**Alumno**: Maria Eugenia Losada


## API DE HARRY POTTER  
**Alumno**: Maria Eugenia Losada

### Endpoints

1. **Obtener todos los personajes**  
   - **GET**: `/api/v1/personajes`
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/personajes](https://tup-labo-4-grupo-15.onrender.com/api/v1/personajes)

   **Descripción**: Retorna una lista de personajes del universo de Harry Potter con opciones de paginación y filtros por nombre, género, casa, actor, ascendencia y nombres alternativos.

   **Parámetros de consulta (query params)**:
   - **name (string)**: Filtra personajes cuyo nombre contenga este valor.
   - **gender (string)**: Filtra por género del personaje.
   - **house (string)**: Filtra por la casa a la que pertenece el personaje (e.g., Gryffindor, Slytherin).
   - **actor (string)**: Filtra personajes por el nombre del actor que los interpreta.
   - **ancestry (string)**: Filtra por ascendencia del personaje (e.g., mestizo, sangre pura).
   - **alternate_names (string)**: Filtra personajes por nombres alternativos.
   - **page (int)**: Número de página para la paginación (por defecto es 1).
   - **limit (int)**: Número de personajes por página (por defecto es 50).

   **Respuesta**:
   ```json
   {
     "status": "Ok",
     "data": [
       {
         "id": 0,
         "name": "Harry Potter",
         "gender": "male",
         "house": "Gryffindor",
         "actor": "Daniel Radcliffe",
         "ancestry": "half-blood",
         "alternate_names": ["The Boy Who Lived", "Chosen One"]
       },
       ...
     ]
   }
   ```

2. **Obtener un personaje por ID**  
   - **GET**: `/api/v1/personajes/:id`  
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/personajes/:id](https://tup-labo-4-grupo-15.onrender.com/api/v1/personajes/:id)

   **Descripción**: Retorna la información detallada de un personaje específico del universo de Harry Potter según su ID.

   **Parámetros**:
   - `id (int)`: El ID del personaje a buscar.

   **Respuesta**:
   ```json
   {
     "status": "Ok",
     "data": {
       "id": 0,
       "name": "Harry Potter",
       "gender": "male",
       "house": "Gryffindor",
       "actor": "Daniel Radcliffe",
       "ancestry": "half-blood",
       "alternate_names": ["The Boy Who Lived", "Chosen One"]
     }
   }
   ```

3. **Obtener personajes con filtros**  
   - **GET**: `/api/v1/personajes?name=string&gender=string&house=string&actor=string&ancestry=string&alternate_names=string&page=int&limit=int`  
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/personajes?name=string&gender=string&house=string&actor=string&ancestry=string&alternate_names=string&page=int&limit=int](https://tup-labo-4-grupo-15.onrender.com/api/v1/personajes?name=string&gender=string&house=string&actor=string&ancestry=string&alternate_names=string&page=int&limit=int)

   **Descripción**: Retorna una lista de personajes filtrados según los parámetros de consulta proporcionados.

   **Parámetros de consulta (query params)**:
   - `name (string)`: Filtra por el nombre del personaje.
   - `gender (string)`: Filtra por el género del personaje.
   - `house (string)`: Filtra por la casa a la que pertenece el personaje.
   - `actor (string)`: Filtra por el actor que interpreta al personaje.
   - `ancestry (string)`: Filtra por la ascendencia del personaje.
   - `alternate_names (string)`: Filtra por nombres alternativos.
   - `page (int)`: Número de página para paginación.
   - `limit (int)`: Límite de personajes por página.

   **Respuesta**:
   ```json
   {
     "status": "Ok",
     "data": [
       {
         "id": 0,
         "name": "Harry Potter",
         "gender": "male",
         "house": "Gryffindor",
         "actor": "Daniel Radcliffe",
         "ancestry": "half-blood",
         "alternate_names": ["The Boy Who Lived", "Chosen One"]
       },
       ...
     ]
   }
   ```

