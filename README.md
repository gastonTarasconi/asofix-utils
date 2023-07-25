# @asofix/utils

## Contenido

- [@asofix/utils](#asofixutils)
  - [Contenido](#contenido)
  - [Introducción](#introducción)
  - [✍️ Desarrollo](#️-desarrollo)
    - [Configuración Inicial](#configuración-inicial)
      - [Requisitos](#requisitos)
      - [Pasos iniciales](#pasos-iniciales)
    - [Subir cambios](#subir-cambios)
    - [Tests](#tests)
    - [ESlint](#eslint)
    - [Documentar](#documentar)
  - [💅 Usar la librería](#-usar-la-librería)
    - [Importar como dependencia](#importar-como-dependencia)
    - [Ejemplo de uso](#ejemplo-de-uso)

## Introducción
@asofix/utils es una librería creada específicamente para el proyecto asofix y está construida usando Typescript. Facilita la integración y uso de múltiples utilidades en el ecosistema asofix.

## ✍️ Desarrollo
### Configuración Inicial
Antes de trabajar en la librería, es necesario establecer un entorno adecuado. 

#### Requisitos
- Node.js ^16.20.0
- yarn

#### Pasos iniciales
Clone el repositorio y luego instale las dependencias:
```bash
git clone git@github.com:AgustinaNunez/utils.git 
yarn install
```
### Subir cambios
1. Realizar los cambios en *./src*

2. Realizar el build:
```bash
yarn build
``` 
> Esto actualiza el build que está en *./dist* y es el que se usa cuando se importa desde un repositorio. 
> 
> El build se realiza usando el bundler [**rollup**](https://rollupjs.org/) siguiendo las configuraciones que están en *rollup.config.ts*. Está configurado para que se genere el build tanto para CommonJS como ES Modules.
> 

3. Subir los cambios a **main**
4. Generar un nuevo tag 
```bash
yarn run tag
```

### Tests
Los tests están hechos en Jest. Para ejecutarlos ejecutamos
```bash
yarn test
```

### ESlint
Para poder ejecutar este comando correctamente hay que tener al menos la versión **16.20.0** de node
```bash
yarn lint
```

### Documentar
Cada función se puede documentar en base a [TSDoc](https://tsdoc.org/). Tiene un [playground](https://tsdoc.org/play/ donde se puede probar cómo quedaría la documentación.

Para generar la documentación
```bash
yarn doc:html
```
La documentación generada queda en *./dist/docs*. Para visualizar la misma en formato HTML localmente ejecutar este comando:
```
yarn doc
```

## 💅 Usar la librería
### Importar como dependencia
Para importar la última versión disponible de la librería en un repositorio
```bash
yarn add git+https://github.com/AgustinaNunez/utils.git
```
Para importar una versión específica, por ejemplo la *v1.6.10*:
```bash
yarn add git+https://github.com/AgustinaNunez/utils.git#v1.6.10
```

> **⚠️ WORKAROUND**: por el momento, si se quiere utilizar una versión nueva de la librería hay que hacer esto: 
> ```bash
> rm -rf ./node_modules/@agus && \
> yarn cache clean && \
> yarn add git+https://github.com/AgustinaNunez/utils.git
> ```

### Ejemplo de uso
Ejemplo de uso con ES Modules:
```javascript
import { dates } from '@agus/utils'
...
const dateToFormat = '2000-05-30 10:00:00'
const timezoneUser = 'Europe/Paris'
const fechaFormateada = dates.formatDateWithTimezone(dateToFormat, timezoneUser)
...
```

