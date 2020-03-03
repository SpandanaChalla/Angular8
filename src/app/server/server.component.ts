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
    ServerUpdate='helloooo';
    serverDetails(){
         return this.servername;
    }
    OnCreateServer(){
        console.log("Hiii");
       this.ServerStatus = "Server created"
    }
    OnUpdateServer(event: Event){
        this.ServerUpdate= (<HTMLInputElement>event.target).value;
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
