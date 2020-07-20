import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.scss']
})
export class MenuIconsComponent implements OnInit {

  constructor() { }

  faEnvelope = faEnvelope;

  ngOnInit() {
  }

}
