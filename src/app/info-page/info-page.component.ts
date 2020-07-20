import { GetElementsService } from './../get-elements.service';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements AfterViewInit {

  constructor(private getElementsService: GetElementsService) { }

  @ViewChild('menu', {static: false}) menu: ElementRef;
  @ViewChild('notification', {static: false}) notification: ElementRef;

  ngAfterViewInit() {
    this.getElementsService.setElements(this.menu, this.notification);
  }

}
