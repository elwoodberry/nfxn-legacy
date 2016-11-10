## Components
[Table Of Contents](../../README.md) / Components  

In the this application we will have many components that make up the UI.  

1. Create The Components Directory
   In the 'app' folder, create a directory called 'components'  

2. In the new 'components' directory, create a 'splash' directory  

3. Inside this directory create a new TypeScript 'splash.component.ts' file  

4. Inside this same directory create a new HTML 'splash.component.html' file  
   This will be our template file for our splash page.  









### Building Our Splash Page Component  
In the 'splash.component.ts'  

1. Import 'Component' from the Angular Core  

2. Create a '@Component' decorator  

3. Create the 'moduleId' property and assign it 'module.id'  
   We will be using relative pathes and that is why this is needed.  

4. Inside the decorator create a new selector. In this case call it 'splash'  

5. Create a 'templateUrl' and point it to our splash component HTML file.  

6. Export the class as 'SplashComponent'  

Splash Component Code  
	```  
	import { Component } from '@angular/core';  

	@Component({  
		moduleId: module.id,  
		selector: 'splash',
		templateUrl: 'splash.component.html'
	})

	export class SplashComponent { }
	```  










### Building Dashboard Component  
In the 'dashboard.component.ts'  

1. Import 'Component' from the Angular Core  

2. Create a '@Component' decorator  

3. Create the 'moduleId' property and assign it 'module.id'  
   We will be using relative pathes and that is why this is needed.  

4. Inside the decorator create a new selector. In this case call it 'dashboard'  

5. Create a 'templateUrl' and point it to our dashboard component HTML file.  

6. Export the class as 'DashboardComponent'  

Dashboard Component Code  
	```  
	import { Component } from '@angular/core';  

	@Component({  
		moduleId: module.id,  
		selector: 'dashboard',
		templateUrl: 'dashboard.component.html'
	})

	export class DashboardComponent { }
	```  







### Importing New Components Into The Main Module  
In order for any of our components to work, they must be imported into the 'app.module.ts' file.  

1. Import the 'Splash' component from './components/tasks/task.component'  

2. Add 'SplashComponent' to the declarations

App Module Code  
```  
import { NgModule }      from '@angular/core';  

import { BrowserModule } from '@angular/platform-browser';  

import { AppComponent }   from './app.component';  

import { SplashComponent }   from './components/splash/splash.component';  

import { DashboardComponent }   from './components/dashboard/dashboard.component';  

@NgModule({  
	imports:      [ BrowserModule ],  
	declarations: [ AppComponent, SplashComponent, DashboardComponent ],  
	bootstrap:    [ AppComponent ]  
})  

export class AppModule { } 
```  









### Update the 'AppComponent'  

1. Inside the decorator create the 'moduleId' property and assign it 'module.id'  

2. Inside the decorator change 'template' to 'templateUrl'  

3. Assign 'app.component.html' to the 'templateUrl' property  

app.component.ts  
```  
import { Component } from '@angular/core';

@Component({  
	moduleId: module.id,  
	selector: '####',  
	templateUrl: 'app.component.html'  
})  

export class AppComponent { }
```  

4. In the 'app' directory create 'app.component.html' file  

5. In the 'app.component.html' put the 'splash' selector  

app.component.html  
```  
<splash></splash>  
```    







