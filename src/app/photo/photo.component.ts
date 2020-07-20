import { Component, OnInit, ElementRef } from '@angular/core';
import { faBars, faSuitcase, faTree, faBahai, faBaseballBall } from '@fortawesome/free-solid-svg-icons';
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

  ngOnInit() {
    this.elemetnsToShow = this.getElementsService.getElements();
  }

  showMenu() {
    this.elemetnsToShow.menu.nativeElement.classList.toggle('hidden-menu');
    this.elemetnsToShow.notification.nativeElement.classList.toggle('displament-notification');
  }

}
