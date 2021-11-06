import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  urls: any[] = [
    { route: '',name:'Home'},
    { route: '/notyetmade',name:'Products'},
    { route: '/notyetmade2',name:'Contact'}
    
  ];


  constructor() { }

  ngOnInit() {
  }

}
