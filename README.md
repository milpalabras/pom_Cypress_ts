# Repositorio para pruebas automatizadas en Cypress 🌲


## Comenzando 🚀

_Estas instrucciones te permitirán instalar las dependencias del proyecto y hacerlo funcionar._

- _Clonar el repositorio y posicionarse sobre la carpeta AxCloudFrameworkTest.Cypress_
    - ``` git clone https://tfs.axoft.com/Desarrollo/TANGO_CLOUD/_git/AxCloudFrameworkTest ```
    - ``` cd AxCloudFrameworkTest ```
    - ``` cd AxCloudFrameworkTest.Cypress ```
- _En caso de ejecutar las pruebas en una VM de axoft, debemos configurar el proxy:_
    - ``` npm config set proxy http://proxy.axoft.com:8080```
- _Instalar dependencias del proyecto_
    - ``` npm install --force ```
- _Instalar Typescript globalmente_
    - ``` npm install -g typescript```
- Ejecutar el script para compilar typescript en javascript
    - ``` npm run build ```
- Ya podemos ejecutar Cypress y correr los casos de prueba
    - ``` npm run cy:open ```


### Pre-requisitos 📋
Necesitaras tener Node.JS instalado y algún IDE
- Instalar Node.js. - 👉 [Node.JS](https://nodejs.org/es/) - Sitio Oficial
- Recomendamos instalar Visual Studio Code . - 👉 [Visual Studio Code](https://code.visualstudio.com/) - Sitio Oficial

## NOMENCLATURA DE ARCHIVOS 📁

La nomeclatura para los archivos de la carpeta .\AxCloudFrameworkTest.Cypress\src\specs 
que tenemos que usar para los archivos *.spec.ts sera: 

	(producto)-(modulo)-(tipo)-(file/suite).spec.ts


 Producto: RE ó EC ó GV ó PV-
 Tipo: ABM WIZARD LIVE etc-

>Ejemplo: 

- gv-ventas-abm-bancos.spec.ts
- gv-ventas-abm-bancos.spec.ts
- gv-ventas-comprobante-pedidos.spec.ts

## NOMENCLATURA PARA DIRECTORIOS 📂
La nomeclatura para los directorios sera:

    modulo/tipo/

>Ejemplo:
- ventas/abm/..
- ventas/wizard/..
- ventas/voucher/..

```bash
< AxCloudFrameworkTest.Cypress >
   |
   |-- cypress/                                    # Carpeta con la compilacion de los archivos .ts
   |    |-- e2e                                    # Carpeta con los archivos .spec.ts                    
   |    |-- fixture                        
   |    |-- plugins...                        
   |
   |-- node_modules/
   |    |
   |    |-- dependencies.../                       # dependencias de node
   |       
   |  
   |-- src/
   |    |
   |    |-- componentes/                          # Componentes de la app
   |    |    
   |    |-- enums/                                # ?
   |    |    
   |    |-- pages/                                # Metodos y clases 
   |    |
   |    |-- specs/                                # Archivos .spec.ts 
   |
   |-- cypress.config.ts
   |
   |-- cypress.env.json                            
   |
   |-- package-lock.json     
   |
   |-- package.json
   |
   |-- tsconfig.json     
   |-- ************************************************************************
```

## GUIDELINES DE CODIGO ☑️
La nomenclatura para identificar elementos HTML será:

    Nombre del elemento+Tipo de elemento(Id/class/css/linktext) = Elemento sin "#" o "."

>Ejemplo:

    private readonly configuracionId = "toolbarButtonLiveConfiguration"

La nomenclatura para crear los metodos sera:

    Accion+Nombre del campo(input, check etc)

>Ejemplo:

    clickOnCofiguration
    clickBtnSimular
    sendKeyOnCodigoPolitica

>La nomenclatura para asignar un valor a una variable sera:

    let nombreVariable = valor;

Ejemplo:

    let queryTitle = "Anexo de bienes";
    let index = 40;

Ejemplo de Test

    describe("Live - Stock - Artículos - Nómina", () => {

        it("01 Ingresar al proceso", () => {
            ...
        });
        
        it("02 Actualizar", () => {
            ...
        });
        
        it("03 Apertura query", () => {
            ...
        });

        it("04 ... ", () => {	
        });
    }

### Ejecutar pruebas en VM:

Cuando necesitamos realizar pruebas que corran en una VM, se deberán actualizar de manera manual con el número de IP en la variable "baseUrl" 
en los archivos: "cypress.config.ts" y el "config.helper.ts"


### Good Practices Automation:

    -Evitar el testear todo, recuerden que la automatización son para casos repetitivos, casos de prioridad alta y/o casos que rompen mucho en la integración.
    -Se recomienda evitar el harcodeo.
    -Crear test sencillos, fáciles de interpretar y mantener.
    -Se recomienda utilizar un describe por spec.
    -Evitemos el uso de IF’s anidados.
    -Evitemos dejar código comentado en el test. En caso, de necesitar comentar se recomienda hacerlo en el método de la page.

### Metodos utiles
    it.skip o describe.skip : Sirve para saltear un test case o test suite
    it.only o describe.only : Sirve para ejecutar solo un test case o test suite