# Angular Quick Start

## Create & Configure
[Table Of Contents](../../README.md) / Create & Configure

This basic implemetation is based on the [Quick Start](https://angular.io/docs/ts/latest/quickstart.html) guide found on [Angular.io](https://angular.io). Quick Start guide as of November 2nd, 2016.

## Create and configure the project.

1. Create a new folder ('client').

2. Create Configuration Files

   - **package.json**
      The manifest for angular and all its dependencies. 
      See [Angular.io](https://angular.io/docs/ts/latest/quickstart.html#!#add-config-files) for most current code base.  

      - Change the name of the project('####')  

   - **tsconfig.json**  
      The [TypeScript](https://www.typescriptlang.org/) config file. Telling the application to compile javascript to ES5. Use the 'commonjs' modules.  
      See [Angular.io](https://angular.io/docs/ts/latest/quickstart.html#!#add-config-files) for most current code base.  

   - **systemjs.config.js**  
      See [Angular.io](https://angular.io/docs/ts/latest/quickstart.html#!#add-config-files) for most current code base.  

3. Install Packages  

   **Change directory to the client directory***  
   ```
   $ cd client  
   ```

   **Install Angular Dependencies***  
   ```  
   $ npm install  
   ```  