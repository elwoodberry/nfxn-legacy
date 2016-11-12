## Routes
[Table Of Contents](../../README.md) / Routes   


### Setting Up Angular Routing.  
Its important that this application started off using routing through configurations based on Express.js. When this file was added the application began using the express route to get into the app. Once in the app, the Angular routing takes over.  

1. In the 'app' folder create 'app.routing.ts'  

2. APP.ROUTING.TS  
	```  
	import {ModuleWithProviders} from '@angular/core';  

	import {Routes, RouterModule} from '@angular/router';  

	import {SplashComponent} from './components/splash/splash.component';  

	import {DashboardComponent} from './components/dashboard/dashboard.component';  

	const appRoutes: Routes=[  
		{  
			path: '',  
			component: SplashComponent  
		},  
		{  
			path: 'dashboard',  
			component: DashboardComponent  
		}  
	];  

	export const appRoutingProviders: any[] = [];  

	export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);  
	```  

3. Import the file into the 'app.module.ts'  
	```  
	import { NgModule }      from '@angular/core';  

	import { BrowserModule } from '@angular/platform-browser';  

	import {routing, appRoutingProviders} from './app.routing';

	import { AppComponent }   from './app.component';  

	import { SplashComponent }   from './components/splash/splash.component';  

	import { DashboardComponent }   from './components/dashboard/dashboard.component';  

	@NgModule({  
		imports: [BrowserModule, routing], 
		declarations: [ AppComponent, SplashComponent, DashboardComponent ],  
		bootstrap:    [ AppComponent ],
		providers: [appRoutingProviders]
	})  

	export class AppModule { }  
	```  

4. INDEX.HTML  
	```
	...   

	<body>  
		<base href='/'>
		<my-app>Loading...</my-app>
	</body>

	...  

	```  

5. APP.COMPONENT.HTML  
	```  
	<router-outlet></router-outlet>  
	```  


### Routing Cheatsheet

1. Anchors  
```  
<a routerLink="/">I Am A Link To A Route</a>
```

2. Click Event  
```  
<a href="#" (click)="auth.login()">Login</a>   
```  





