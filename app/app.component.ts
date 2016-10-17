import {Component} from '@angular/core';

@Component({
    selector: 'angular-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    
    title:string;
    tasks:string[];
    flag:boolean;

constructor(){
	this.title = "Angular2";
    this.tasks = [];
    this.flag = false;
}
addTask(title: string){
    this.tasks.push(title);        
}


}
