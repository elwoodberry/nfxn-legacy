


1. Create a 'services' directory  

2. In the services directory create 'auth.service.ts'  

3. Paste in the TypeScript file in the [Auth0 Tutorial](https://auth0.com/docs/quickstart/spa/angular2/01-login)  

4. Change line  

Original Code  
```  
this.lock.on("authenticated", (authResult) => {  
```  

Updated Code  
```  
this.lock.on("authenticated", (authResult: any) => {  
```  


### APP.MODULE.TS  
	```  
	import { NgModule }      from '@angular/core';  

	import { BrowserModule } from '@angular/platform-browser';  

	import {routing, appRoutingProviders} from './app.routing';

	import { AppComponent }   from './app.component';  

	import { AUTH_PROVIDERS }   from 'angular2-jwt';  

	import { SplashComponent }   from './components/splash/splash.component';  

	import { DashboardComponent }   from './components/dashboard/dashboard.component';  

	import { Auth } from './services/auth.service';  

	@NgModule({  
		imports: [BrowserModule, routing], 
		declarations: [ AppComponent, SplashComponent, DashboardComponent ],  
		bootstrap:    [ AppComponent ],
		providers: [appRoutingProviders, AUTH_PROVIDERS, Auth]
	})  

	export class AppModule { }  
	```   




### APP.COMPONENT.TS  
	```  
	import { Component } from '@angular/core';  
	import { Auth } from './services/auth.service'

	@Component({
		moduleId: module.id,  
		selector: 'nfxn',
		templateUrl: 'app.component.html'
	})

	export class AppComponent {  
		constructor(private auth:Auth){}
	}  
	``` 





### SPLASH.COMPONENT.TS  
	```  
	import { Component } from '@angular/core';   
	import { Auth } from '../../services/auth.service'  

	@Component({  
		moduleId: module.id,  
		selector: 'splash',
		templateUrl: 'splash.component.html'
	})

	export class SplashComponent {  
		constructor(private auth:Auth){}  
	}
	``` 


### DASHBOARD.COMPONENT.TS  
	```  
	import { Component } from '@angular/core';  
	import { Auth } from '../../services/auth.service'  

	@Component({  
		moduleId: module.id,  
		selector: 'dashboard',
		templateUrl: 'dashboard.component.html'
	})

	export class DashboardComponent {  
		constructor(private auth:Auth){}  
	}  
	``` 

### Login Button  
Where ever the login button lives   
```  
<a href="#" (click)="auth.login()">Login</a> 
```  




