import { Injectable, OnInit } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class DataServiceService implements OnInit {
  refresh$ = new Subject<boolean>();

 
  data=[
          { name: "ss", age: 25, dob: 200 },
          { name: "sssds", age: 25, dob: 2020 },
          { name: "sssd", age: 2235, dob: 20220 },
          { name: "sssdsds", age: 2235, dob: 20320 },
          { name: "ssdsdsaas", age: 2235, dob: 230 },
          { name: "sssd", age: 2235, dob: 20 }
        ];

  TbData$ = new BehaviorSubject<any>(null);

  constructor() {}

  ngOnInit() {
    
    
  }

  setData() {
    this.TbData$.next(this.data);
  }

  deletefromData() {
   this.data = this.data.filter((v,i)=> i!== this.data.length-1);
   console.log( this.data);
   this.refresh$.next(true);
  }
}
