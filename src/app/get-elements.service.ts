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

  getElements() {
    return this.elements;
  }

  setElements(menu, notification) {
    this.elements.menu = menu;
    this.elements.notification = notification;
  }
}
