import { Component ,OnInit} from '@angular/core';

@Component({
    selector:'app-Server',
    templateUrl:'./server.component.html'
})
export class ServerComponent implements OnInit{
    serverId:number = 10;
    servername:string = 'Explorer';
    allowNewServer = true;
    serverDetails(){
         return this.servername;
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