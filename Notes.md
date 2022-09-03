
====================================================================================================

# Linea de comando

### Ejecutando todas las pruebas
```
npx playwright test
```

### ###  Ejecutar un solo archivo de prueba
```
npx playwright test landing-page.spec.ts
```

###  Ejecutar un conjunto de archivos de prueba
```
npx playwright test tests/todo-page/ tests/landing-page/
```

###  Ejecutar archivos que tienen landing o login en el nombre del archivo
```
npx playwright test landing login
```

###  Ejecutar la prueba con el título
```
npx playwright test -g "add a todo item"
```

###  Ejecución de pruebas en modo dirigido
```
npx playwright test landing-page.spec.ts --headed
```

###  Ejecución de pruebas en navegadores específicos
```
npx playwright test landing-page.ts --project=chromium
```
====================================================================================================

## Pruebas de Depuracion

### Depuración de todas las pruebas:
```
npx playwright test --debug
```

### Depuración de un archivo de prueba:
```
npx playwright test example.spec.ts --debug
```

### Depuración de una prueba desde el número de línea donde test(..se define:
```
npx playwright test example.spec.ts:42 --debug
```

====================================================================================================

## Ejecutando Codegen
```
npx playwright codegen playwright.dev
``` 
====================================================================================================

## Grabacion de un rastro
```
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  retries: process.env.CI ? 2 : 0, // set to 2 when running on CI
  ...
  use: {
    trace: 'on-first-retry', // record traces on first retry of each test
  },
};

module.exports = config;
```

### Comando para activarlo
``` 
npx playwright test --trace on
``` 


====================================================================================================

# **Inside that directory, you can run several commands:**

#### **Runs the end-to-end tests.**
```
npx playwright test
```

#### **Runs the tests only on Desktop Chrome.**
```
npx playwright test --project=chromium
```

#### **Runs the tests in a specific file.**
```
npx playwright test example
```

#### **Runs the tests in debug mode.**
```
npx playwright test --debug
```

#### **Auto generate tests with Codegen.**
```
npx playwright codegen
```

#### **We suggest that you begin by typing:**
```
npx playwright test
```

#### **And check out the following files:**
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

*Visit https://playwright.dev/docs/intro for more information.* ✨

**Happy hacking! �**

