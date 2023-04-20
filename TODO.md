# TODO


## Updates

- agregar api config también al `environment.prod.ts`, así en el caso de que se corra un entorno productivo, no tire errores por `undefined` al momento de querer acceder -- DONE
- seguir "naming conventions" de manera consistente, e.g: no usar camelCase (`popularMovies.model.ts`), en cambio usar `popular-movies.model.ts` 


## Tasks

Crear un módulos específicos para: 
- movies
- auth: autorización y sesión de usuarios
- shared: material, componentes reutilizables
- core: componentes estáticos (top-nav, footer, etc)



Estructurar los módulo según las siguientes categorías:
- routes: la navegación debe ser un módulo dentro de movies, no debe estar en el `app-routing.module` 
- components (no "views") 
- services -- DONE 
- config (por ahora que exporte solamente un objeto vacío, mas adelante nos va a servir para configuraciones específicas como filtros, etc) 
- models



Agregar los siguientes paths al compilador de Typescript para facilitar los `import`: 
- `@env/*`
- `@app/*`
- `@auth/*`
- `@movies/*`

Ejemplo: https://www.typescriptlang.org/tsconfig#paths



Diagramar las navegaciónes y los componentes según los siguientes diagramas:
- navegación general: https://drive.google.com/file/d/1WzlzRj04M8l5neOS6PTdu-YSrjceCtZJ/view?usp=sharing --DONE 
- views: https://drive.google.com/file/d/1caBVFxWtueq--UMUhCx8JU0DtBbiKtGj/view?usp=sharing --DONE

Correciones:
<!-- -- en core-routing, usar redirectTo en lugar de cargar el component
-- en core config, cambiar Object por Object.freeze
-- buscar convenciones acerca de como/donde poner las interfaces,types y models
-- movies api key, debería guardar solo el valor, crear un interceptor
-- agregar tipado: movies: any; por Movies[]
-- que las movies carguen solas, sin el click -->
<!-- Agregar un form con filtros, e.g. por género. Cuando seleccione un género desde un menú select, el filtro debe reflejarse en la URL, hacer la query con el filtro, y mostrar la lista actualizada -->
Agregar un loading, tanto para la query inicial como cuando se ejecuta un filtro
<!-- -- Agregar un map al movies service y que me mapee el response.result -->
<!-- -- Agregar error handling en el servicio si se Detecta que hay un error, mostrar un mensaje -->
Agregar error handling en el componente, e.g si se Detecta que hay un error, mostrar un mensaje
<!-- Crear un component nuevo que haga de componente padre de MoviesList -->  
<!-- Movies Home: Este componente nuevo debe manejar toda la lógica de obtener las movies, y el MoviesList solo debería recibir las movies como input,. -->
<!-- Movies list: modificarle el change detection strategy a onPush -->
<!-- Tener en cuenta tanto el loading como el error al momento de maquetar el componente Movies padre. MoviesList solo debe recibir las movies y renderizar la lista, nada más. -->

