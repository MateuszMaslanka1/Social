import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faBahai }  from '@fortawesome/free-solid-svg-icons';
import { faBaseballBall } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }
  faBars = faBars;
  faSuitcase = faSuitcase;
  faTree = faTree;
  faBahai = faBahai;
  faBaseballBall = faBaseballBall;

  ngOnInit() {

  }

}
