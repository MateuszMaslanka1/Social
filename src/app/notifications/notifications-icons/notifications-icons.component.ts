import {Component, ElementRef, OnInit} from '@angular/core';
import {faEye ,faHeart ,faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-notifications-icons',
  templateUrl: './notifications-icons.component.html',
  styleUrls: ['./notifications-icons.component.scss']
})
export class NotificationsIconsComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  faEye = faEye
  faHeart = faHeart;
  faTrash = faTrash;
  isLike: boolean;

  ngOnInit() {
  }

  likeNotification() {
    this.isLike = !this.isLike;
  }

  removeNotification() {
    this.elRef.nativeElement.parentElement.parentElement.remove();
  }
}
