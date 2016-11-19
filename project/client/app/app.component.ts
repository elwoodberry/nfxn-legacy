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