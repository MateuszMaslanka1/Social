import { Injectable, ElementRef } from '@angular/core';

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
    console.log(openMenuFlag);
    this.openMenuFlag = openMenuFlag;
  }
}
