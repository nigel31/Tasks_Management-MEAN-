import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponentsComponent } from './smart-components/smart-components.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
@NgModule({
  declarations: [
    AppComponent,
    SmartComponentsComponent,
    ViewTaskComponent,
    ListTaskComponent,
    NavBarComponent,
    EditTaskComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
