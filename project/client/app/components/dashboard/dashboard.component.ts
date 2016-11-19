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