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


## API DE HARRY POTTER. 
**Alumno**: Maria Eugenia Losada


