import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.scss']
})
export class MenuIconsComponent implements OnInit {

  constructor() { }

  @Input('text') text: string;
  @Input('count') count: number;

  ngOnInit() {
  }

}
