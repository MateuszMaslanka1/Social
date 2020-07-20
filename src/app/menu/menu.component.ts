import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  faPencilAlt = faPencilAlt;
  faEnvelope = faEnvelope;

  ngOnInit() {
  }

}
