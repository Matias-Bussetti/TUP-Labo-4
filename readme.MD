# API con Express creada con Node.js para Proyecto 1 de Laboratorio IV

## Alumnos

<a href="https://github.com/Matias-Bussetti/TUP-Labo-4/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Matias-Bussetti/TUP-Labo-4" />
</a>

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
   ```

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
  ```

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
  ```

## API DE PACIENTES.

**Alumno**: Matias Ezequiel Bussetti

### Endpoints

1. **Obtener todos los pacientes**

   - **GET**: `/api/v1/patients`
   - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/patients](https://tup-labo-4-grupo-15.onrender.com/api/v1/patients)

   **Descripción**: Retorna una lista de 50 pacientes.

   **Respuesta**:

   ```json
   {
     "status": 200,
     "data": [
       {
            "gender": "female",
            "email": "aynz.khrymy@example.com",
            "name": {
                "title": "Miss",
                "first": "آیناز",
                "last": "کریمی"
            },
            "dob": {
                "date": "1992-02-07T17:56:13.316Z",
                "age": 32
            },
            "location": {
                "street": {
                    "number": 9617,
                    "name": "نام قدیم میدان های تهران"
                },
                "city": "تهران",
                "state": "گلستان",
                "country": "Iran",
                "postcode": 66909,
                "coordinates": {
                    "latitude": "17.2334",
                    "longitude": "88.9196"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "id": "2d5afd5e-a598-469f-9933-4edba18bcefb",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/62.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
            },
            "nat": "IR"
        },
        ...
     ]
   }
   ```

2. **Obtener paciente por ID**

- **GET**: `/api/v1/patients/:id`
- **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/patients/2d5afd5e-a598-469f-9933-4edba18bcefb](https://tup-labo-4-grupo-15.onrender.com/api/v1/patients/2d5afd5e-a598-469f-9933-4edba18bcefb)

  **Descripción**: Retorna la información de un paciente específico mediante su ID.
  **Parámetros**:
  **id (string)**: ID del personaje a buscar.
  **Respuesta**:

```json
{
  "status": 200,
  "data": {
    "gender": "female",
    "email": "aynz.khrymy@example.com",
    "name": {
      "title": "Miss",
      "first": "آیناز",
      "last": "کریمی"
    },
    "dob": {
      "date": "1992-02-07T17:56:13.316Z",
      "age": 32
    },
    "location": {
      "street": {
        "number": 9617,
        "name": "نام قدیم میدان های تهران"
      },
      "city": "تهران",
      "state": "گلستان",
      "country": "Iran",
      "postcode": 66909,
      "coordinates": {
        "latitude": "17.2334",
        "longitude": "88.9196"
      },
      "timezone": {
        "offset": "+4:30",
        "description": "Kabul"
      }
    },
    "id": "2d5afd5e-a598-469f-9933-4edba18bcefb",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/62.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
    },
    "nat": "IR"
  },
  "requestTime": 1727227836784
}
```

3. **Obtener Pacientes con filtros. Query params**

- **GET**: `/api/v1/patients?gender=string&age=int`
- **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/patients?gender=female&age=33](https://tup-labo-4-grupo-15.onrender.com/api/v1/patients?gender=female&age=33)

  **Descripción**: Retorna una lista de pacientes filtrados por los parámetros especificados.

  **Parámetros de consulta**:
  **female (string)**: Filtra por genero (female ó male).
  **age (int)**: Filtra por edad.

  **Respuesta**:

```json
{
  "status": 200,
  "data": [
    {
      "gender": "female",
      "email": "aynz.khrymy@example.com",
      "name": {
        "title": "Miss",
        "first": "آیناز",
        "last": "کریمی"
      },
      "dob": {
        "date": "1992-02-07T17:56:13.316Z",
        "age": 32
      },
      "location": {
        "street": {
          "number": 9617,
          "name": "نام قدیم میدان های تهران"
        },
        "city": "تهران",
        "state": "گلستان",
        "country": "Iran",
        "postcode": 66909,
        "coordinates": {
          "latitude": "17.2334",
          "longitude": "88.9196"
        },
        "timezone": {
          "offset": "+4:30",
          "description": "Kabul"
        }
      },
      "id": "2d5afd5e-a598-469f-9933-4edba18bcefb",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/62.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "email": "lenthe.nelen@example.com",
      "name": {
        "title": "Miss",
        "first": "Lenthe",
        "last": "Nelen"
      },
      "dob": {
        "date": "1992-08-26T12:32:38.402Z",
        "age": 32
      },
      "location": {
        "street": {
          "number": 1951,
          "name": "Brandebeemd"
        },
        "city": "Merkelbeek",
        "state": "Noord-Brabant",
        "country": "Netherlands",
        "postcode": "4628 LK",
        "coordinates": {
          "latitude": "-80.3587",
          "longitude": "-129.5434"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "id": "74b488ec-7ed5-4b46-8a81-effcdd383716",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/92.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
      },
      "nat": "NL"
    }
  ],
  "requestTime": 1727228107901
}
```

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
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "stats": {
                "hp": 45,
                "attack": 49,
                "defense": 49,
                "specialAttack": 65,
                "specialDefense": 65,
                "speed": 45
            }
        }
   ```

2. **Obtener pokemon por ID**
  - **GET**: `/api/v1/pokemon/:id`
  - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/:id](https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/:id)

    **Descripción**: Retorna la información de un pokemon en específico mediante su ID.
    **Parámetros**:
    **id de Pokedex**: ID del pokemon a buscar.
    **Respuesta**:
    ```json
    {
    "status": 200,
    "data": {
        "id": 30,
        "name": "nidorina",
        "types": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "stats": {
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 56
        }
    },
    "requestTime": 1732662331724
```
3. **Obtener pokemon con filtros. Query params**
  - **GET**: `/api/v1/pokemon/search?name=string&type=string&limit=int&offset=int`
  - **GET RENDER**: [https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/search?name=string&type=string&limit=int&offset=int](https://tup-labo-4-grupo-15.onrender.com/api/v1/pokemon/search?name=string&type=string&limit=int&offset=int)

    **Descripción**: Retorna una lista de pokemon filtrados por los parámetros especificados.
    **Parámetros de consulta**:
    - **name (string)**: Filtra por el nombre del pokemon.
    - **type (string)**: Filtra por el tipo del pokemon.
    - **limit (int)**: Número de personajes a retornar (por defecto es ).
    - **offset (int)**: Número de personajes a omitir (por defecto es 0).
    **Respuesta**:
    ```json
    {
    "status": 200,
    "data": {
        "id": 30,
        "name": "nidorina",
        "types": [
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "stats": {
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 56
        }
    }
    "requestTime": 1732662331724
```

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
