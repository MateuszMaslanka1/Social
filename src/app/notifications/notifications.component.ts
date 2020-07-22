import {Component, ViewChildren, ElementRef, QueryList, AfterViewInit} from '@angular/core';
import {faCloud, faDesktop, faImage, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {GetElementsService} from '../get-elements.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements AfterViewInit  {

  constructor(private getElementsService: GetElementsService) { }
  faMobileAlt = faMobileAlt;
  faCould = faCloud;
  faImage = faImage;
  faDesktop = faDesktop;
  @ViewChildren('notyficationElements') notyficationElements: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.getElementsService.setNotyficationElements(this.notyficationElements);
  }

  toggleClass(event) {
   if (this.getElementsService.getOpenMenuFlag()) {
      event.currentTarget.classList.toggle('add-displacement-to-notification');
      event.currentTarget.nextSibling.classList.toggle('option');
      event.currentTarget.nextSibling.classList.toggle('add-displacement-to-option');
   }
  }
}
