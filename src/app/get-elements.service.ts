import { Injectable, ElementRef, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetElementsService {

  constructor() { }

  elements = {
    menu: ElementRef,
    notification: ElementRef
  };
  openMenuFlag = true;
  notyficationElements: QueryList<ElementRef>;

  getElements() {
    return this.elements;
  }

  setElements(menu, notification) {
    this.elements.menu = menu;
    this.elements.notification = notification;
  }

  getOpenMenuFlag() {
    return this.openMenuFlag;
  }

  setOpenMenuFlag(openMenuFlag) {
    this.openMenuFlag = openMenuFlag;
  }

  getNotyficationElements() {
    return this.notyficationElements;
  }

  setNotyficationElements(notyficationElements) {
    this.notyficationElements = notyficationElements;
  }
}
