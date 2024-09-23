## API con express creada con NodeJS

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

