import { Component } from '@angular/core';


@Component({
    selector:'app-Server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverId:number = 10;
    servername:string = 'Explorer'
    serverDetails(){
         return this.servername;
    }
}