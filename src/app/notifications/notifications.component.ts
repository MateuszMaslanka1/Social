import {Component, OnInit} from '@angular/core';
import {faEye, faHeart, faTrash} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit  {

  constructor() { }
  faEye = faEye
  faHeart = faHeart;
  faTrash = faTrash;

  ngOnInit()  {
  }

  toggleClass(event) {
    event.currentTarget.classList.toggle('add-displacement-to-notification');
    event.currentTarget.nextSibling.classList.toggle('option');
    event.currentTarget.nextSibling.classList.toggle('add-displacement-to-option');
  }
}
