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


## API DE POKEMON. 
**Alumno**: Diego Bruno

### Endpoints

1. **Obtener todos los pokemons (muestra los primeros 50)**
   - **GET**: `/api/v1/pokemon/all`
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/all](https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/all)

   **Descripción**: Retorna una lista de los primeros 50 pokemons.

   **Respuesta**:
   ```json
   {
     "status": 200,
      "data": [
        {
          "id": 1,
          "name": "bulbasaur",
          "types": [
              "grass",
              "poison"
          ]
        }
    ]
   }

2. **Obtener pokemon por ID**
  - **GET**: `/api/v1/pokemon/:id`
  - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/:id](https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/:id)

    **Descripción**: Retorna la información de un pokemon en específico mediante su ID.
    **Parámetros**:
    **id de Pokedex**: ID del pokemon a buscar.
    **Respuesta**:
    ```json
    {
      "status": "200",
      "data": {
        "id": 25,
        "name": "pikachu",
        "types": [
              "grass",
              "poison"
          ]
      }
    }

3. **Obtener pokemon con filtros. Query params**
  - **GET**: `/api/v1/pokemon/search?name=string&limit=int&offset=int`
  - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/search?name=string&limit=int&offset=int](https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/search?name=string&limit=int&offset=int)

    **Descripción**: Retorna una lista de pokemon filtrados por los parámetros especificados.

    **Parámetros de consulta**:
    **name (string)**: Filtra por el nombre del pokemon.
    **limit (int)**: Número de personajes a retornar (por defecto es ).
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

