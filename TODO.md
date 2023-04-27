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
En core-routing, usar redirectTo en lugar de cargar el component
En core config, cambiar Object por Object.freeze
Buscar convenciones acerca de como/donde poner las interfaces,types y models (interface en el service, no en el module)
movies api key, debería guardar solo el valor, crear un interceptor
que las movies carguen solas, sin el click 
Agregar un form con filtros, e.g. por género. Cuando seleccione un género desde un menú select, el filtro debe reflejarse en la URL, hacer la query con el filtro, y mostrar la lista actualizada 
Agregar un loading, tanto para la query inicial como cuando se ejecuta un filtro
Agregar un map al movies service y que me mapee el response.result
Agregar error handling en el servicio si -->
Agregar error handling en el componente, e.g si se Detecta que hay un error, mostrar un mensaje
Crear un component nuevo que haga de componente padre de MoviesList  
Movies Home: Este componente nuevo debe manejar toda la lógica de obtener las movies, y el MoviesList solo debería recibir las movies como input,. -->
Movies list: modificarle el change detection strategy a onPush
Tener en cuenta tanto el loading como el error al momento de maquetar el componente Movies padre. MoviesList solo debe recibir las movies y renderizar la lista, nada más.


HOMEWORK: 
-- en core-routing, usar redirectTo en lugar de cargar el component (core no auth) -- DONE
-- agregar path para material (tsconfig.json) -- DONE
-- mover module material al mismo nivel que los demas modules -- DONE
-- modificar el data$ y enviar el input como un array de elementos -- DONE
-- agregar el filtro seleccionado en la URL -- DONE
-- mover el spinner al moviesHome -- DONE
-- leer estrategias Catch y handling error y en base a eso actualizar el template de MoviesHome agregando la condición de si hay error: 
https://www.google.com/url?sa=j&url=https%3A%2F%2Fblog.angular-university.io%2Frxjs-error-handling%2F&uct=1667839164&usg=UC9E9zr2uCw7r0l76mByCxd2zlA.&source=chat