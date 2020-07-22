import {Component, OnInit} from '@angular/core';
import {faBookmark, faCog, faEject, faEnvelope, faPaperPlane, faPencilAlt, faUserFriends} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  faPencilAlt = faPencilAlt;
  faEject = faEject;
  faEnvelope = faEnvelope;
  faUserFriends = faUserFriends;
  faPaperPlane = faPaperPlane;
  faBookmark = faBookmark;
  faCog = faCog;
  mail = ['example1@example.pl', 'example2@example.pl'
    , 'example3@example.pl' , 'example4@example.pl', 'example5@example.pl'];
  countOfEmail: number;
  emailFlag = true;

  ngOnInit() {
    this.countOfEmail = this.mail.length;
  }

  showEmailList() {
    this.emailFlag = !this.emailFlag;
  }
}
