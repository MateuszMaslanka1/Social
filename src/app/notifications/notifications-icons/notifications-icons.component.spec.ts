import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsIconsComponent } from './notifications-icons.component';

describe('NotificationsIconsComponent', () => {
  let component: NotificationsIconsComponent;
  let fixture: ComponentFixture<NotificationsIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
