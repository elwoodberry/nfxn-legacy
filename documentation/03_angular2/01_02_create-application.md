# Angular Quick Start

## Create '####' Application
[Table Of Contents](../../README.md) / Create '####' Application

This basic implemetation is based on the [Quick Start](https://angular.io/docs/ts/latest/quickstart.html) guide found on [Angular.io](https://angular.io). Quick Start guide as of November 2nd, 2016.

## Create '####' Application.

1. Create a new folder inside the 'client' folder ('app').

2. Inside the 'app' folder create the 'app.module.ts' Typescript file.  
   This is the entry point to your application. This implements the 'NgModule', which helps keep the code organized. Everytime a component is created it must be imported into this file.

3. Create the 'app.component.ts' Typescript file  
   The root component. It imports the 'Component' package. Adds the '@Component' decorator. The decorator contains a 'selector' and a 'template' which is an HTML string. And finally it has an 'AppComponent' class.

4. Import 'app.component.ts'
   The 'app.component.ts' must be imported via it's class, 'AppComponent' into the 'app.module.ts' file.  

   Revised 'app.module.ts'  
   ```  
   import { NgModule }      from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppComponent }   from './app.component';

   @NgModule({
     imports:      [ BrowserModule ],
     declarations: [ AppComponent ],
     bootstrap:    [ AppComponent ]
   })

   export class AppModule { }  
   ```   

5. Create 'main.ts' Typescript file.  
   This code initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.  

6. Compile Typescript Files
   All the files created are Typescript files that need to be compiled into javascript files.

7. Update Views Engine HTML
   Update your view engine HTML file with code based from the Angular Quick start guide.  

   - Chage the name in the titleapp.component.ts

8. Start Application
   
   Compile Javascript from the 'client' directory
   ```
   npm start
   ```   

   This will fire [http://localhost:3001/](http://localhost:3001/). 


