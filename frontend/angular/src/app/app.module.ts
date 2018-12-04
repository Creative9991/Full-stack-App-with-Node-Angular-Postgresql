import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MonstersComponent } from './monsters/monsters.component';
import { HabitatsComponent } from './habitats/habitats.component';
import { LivesComponent } from './lives/lives.component';
import {HttpClientModule} from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { LocaldatasericeService }  from './localdataservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonstersComponent,
    HabitatsComponent,
    LivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   LocaldatasericeService, { dataEncapsulation: false }
    //   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
