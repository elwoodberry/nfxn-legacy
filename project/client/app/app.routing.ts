
// Module With Providers
import {ModuleWithProviders} from '@angular/core';

// Routes and Router Module
import {Routes, RouterModule} from '@angular/router';

// Splash Component
import {SplashComponent} from './components/splash/splash.component';

// Dashboard Component
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

// EMCA Constant statements
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);