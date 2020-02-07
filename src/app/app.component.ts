import { Component,OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  value ='not clicked';



  constructor(public ds: DataServiceService){
   
  }

  ngOnInit(){
      this.ds.refresh$.subscribe(d=>{
      console.log('sub')
      this.ds.setData();
    });
      this.ds.refresh$.next(true);
  }
}
