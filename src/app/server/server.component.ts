import { Component ,OnInit} from '@angular/core';

@Component({
    selector:'app-Server',
    templateUrl:'./server.component.html'
})
export class ServerComponent implements OnInit{
    serverId:number = 10;
    servername:string = 'Explorer';
    allowNewServer = true;
    ServerStatus = "no server was created"
    serverDetails(){
         return this.servername;
    }
    OnCreateServer(){
        console.log("Hiii");
       this.ServerStatus = "Server created"
    }
    constructor(){
        setTimeout(()=>{    //<<<---    using ()=> syntax
            this.allowNewServer = false;
       }, 3000);
}

ngOnInit()
{

}

}
