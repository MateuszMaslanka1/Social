import {Component, OnInit} from '@angular/core';
import {faMobileAlt, faCloud, faImage, faDesktop} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit  {

  constructor() { }
  faMobileAlt = faMobileAlt;
  faCould = faCloud;
  faImage = faImage;
  faDesktop = faDesktop;

  ngOnInit()  {
  }

  toggleClass(event) {
    event.currentTarget.classList.toggle('add-displacement-to-notification');
    event.currentTarget.nextSibling.classList.toggle('option');
    event.currentTarget.nextSibling.classList.toggle('add-displacement-to-option');
  }
}
