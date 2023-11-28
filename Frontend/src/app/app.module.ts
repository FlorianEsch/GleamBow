import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/userpage/header/header.component';
import { FooterComponent } from './components/userpage/footer/footer.component';
import { MainContentPageComponent } from './components/userpage/main-content-page/main-content-page.component';
import { SidebarComponent } from './components/userpage/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { UserPageComponent } from './components/userpage/user-page/user-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DraggableContentComponent } from './components/general/draggable-content/draggable-content.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentPageComponent,
    SidebarComponent,
    UserPageComponent,
    DraggableContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    DragDropModule,
    MatSlideToggleModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
