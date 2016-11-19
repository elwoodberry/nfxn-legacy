import { Component } from '@angular/core';   
import { Auth } from '../../services/auth.service'  
console.log('Splash: Import Area');

@Component({  
	moduleId: module.id,  
	selector: 'splash',
	templateUrl: 'splash.component.html'
})

export class SplashComponent {
	constructor(private auth:Auth){}  
}