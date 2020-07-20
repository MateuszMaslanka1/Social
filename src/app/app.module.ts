import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PhotoComponent } from './photo/photo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationsIconsComponent } from './notifications/notifications-icons/notifications-icons.component';
import { MenuComponent } from './menu/menu.component';
import { MenuIconsComponent } from './menu/menu-icons/menu-icons.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    NotificationsComponent,
    PhotoComponent,
    NotificationsIconsComponent,
    MenuComponent,
    MenuIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
