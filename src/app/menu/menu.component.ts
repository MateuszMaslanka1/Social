import { Component, OnInit, ElementRef } from '@angular/core';
import { faPencilAlt, faEject } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  faPencilAlt = faPencilAlt;
  faEject = faEject;
  mail = ['example1@example.pl','example2@example.pl','example3@example.pl','example4@example.pl','example5@example.pl'];
  emailFlag = true;

  ngOnInit() {
  }

  showEmailList($event) {
    this.emailFlag = !this.emailFlag;
    $event.currentTarget.classList.toggle('click-style-option');
    $event.currentTarget.childNodes[0].childNodes[0].classList.toggle('color-for-icon');
  }
}
