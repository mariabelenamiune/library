# TODO


## Updates

- agregar api config también al `environment.prod.ts`, así en el caso de que se corra un entorno productivo, no tire errores por `undefined` al momento de querer acceder -- DONE
- seguir "naming conventions" de manera consistente, e.g: no usar camelCase (`popularMovies.model.ts`), en cambio usar `popular-movies.model.ts` --DONE


## Tasks

Crear un módulos específicos para: --DONE
- movies
- auth: autorización y sesión de usuarios
- shared: material, components genéricos (navegaciones), etc

Estructurar los módulo según las siguientes categorías:
- routes: la navegación debe ser un módulo dentro de movies, no debe estar en el `app-routing.module` -- consultar 
- components (no "views") -- DONE
- services -- DONE 
- config (por ahora que exporte solamente un objeto vacío, mas adelante nos va a servir para configuraciones específicas como filtros, etc) -- DONE
- models


---


Agregar los siguientes paths al compilador de Typescript para facilitar los `import`: 
- `@env/*`
- `@app/*`
- `@auth/*`
- `@movies/*`

Ejemplo: https://www.typescriptlang.org/tsconfig#paths


--- DONE


Diagramar las navegaciónes y los componentes según los siguientes diagramas:
- navegación general: https://drive.google.com/file/d/1WzlzRj04M8l5neOS6PTdu-YSrjceCtZJ/view?usp=sharing
- views: https://drive.google.com/file/d/1caBVFxWtueq--UMUhCx8JU0DtBbiKtGj/view?usp=sharing --DONE


