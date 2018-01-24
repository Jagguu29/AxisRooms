import {Injectable} from "@angular/core"
import {Http,Response} from "@angular/http"
import {Observable} from "rxjs/Observable"
import "rxjs/add/operator/map"
import 'rxjs/Rx'
@Injectable()

export class ChatService{
    users;
    constructor(private http:Http){

    }
    getUsers():Observable<any>{
       return this.http.get("http://demo4842709.mockable.io/users").map((response:Response)=>{
          let products;
          // json() method convert Json to Json objects
          products = response;
          return products;
       })
    }
}