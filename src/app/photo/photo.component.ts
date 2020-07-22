import { Component, OnInit } from '@angular/core';
import { faBars, faSuitcase, faTree, faBahai, faBaseballBall, } from '@fortawesome/free-solid-svg-icons';
import { GetElementsService } from '../get-elements.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private getElementsService: GetElementsService) { }
  faBars = faBars;
  faSuitcase = faSuitcase;
  faTree = faTree;
  faBahai = faBahai;
  faBaseballBall = faBaseballBall;
  elemetnsToShow;
  openMenuFlag = true;

  ngOnInit() {
    this.elemetnsToShow = this.getElementsService.getElements();
    this.getElementsService.setOpenMenuFlag(this.openMenuFlag);
  }

  showMenu() {
    this.elemetnsToShow.menu.nativeElement.classList.toggle('hidden-menu');
    this.elemetnsToShow.notification.nativeElement.classList.toggle('displament-notification');
    this.openMenuFlag = !this.openMenuFlag;
    this.getElementsService.setOpenMenuFlag(this.openMenuFlag);
    if (!this.openMenuFlag) {
      this.getNotyficationElmentsToHidden();
    }
  }

  getNotyficationElmentsToHidden() {
    const elements = this.getElementsService.getNotyficationElements().toArray();
    elements.forEach((el) => {
      if (el.nativeElement.children[0].classList.contains('add-displacement-to-notification') &&
      el.nativeElement.children[1].classList.contains('add-displacement-to-option')) {
        el.nativeElement.children[0].classList.toggle('add-displacement-to-notification');
        el.nativeElement.children[1].classList.toggle('option');
        el.nativeElement.children[1].classList.toggle('add-displacement-to-option');
      }
    });
  }
}
