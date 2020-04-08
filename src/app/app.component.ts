import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CoronaApp';

 
  Top(){  
    scroll({ top: 0, left: 0, behavior: 'smooth'});
  }


  ngOnInit(){
    
  }
}
