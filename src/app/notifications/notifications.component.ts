import {Component, OnInit} from '@angular/core';
import {faCloud, faDesktop, faImage, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {GetElementsService} from "../get-elements.service";
import {of} from "rxjs";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit  {

  constructor(private getElementsService: GetElementsService) { }
  faMobileAlt = faMobileAlt;
  faCould = faCloud;
  faImage = faImage;
  faDesktop = faDesktop;

  ngOnInit()  {
  }

  toggleClass(event) {
   if (this.getElementsService.getOpenMenuFlag()) {
      event.currentTarget.classList.toggle('add-displacement-to-notification');
      event.currentTarget.nextSibling.classList.toggle('option');
      event.currentTarget.nextSibling.classList.toggle('add-displacement-to-option');
   }
  }
}
