
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