import {Component} from "@angular/core"
import { ChatService } from "../shared/chat.service";

@Component({
    selector:'users-list',
    template:`
            <div>{{products | json}}</div>
    `
})
export class UsersListComponent{
    products
    constructor(private chatService:ChatService){
        
    }
    ngOnInit(){
        this.chatService.getUsers().subscribe ( (products )=>{
            this.products = products;
    })
    }
}