import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SaludoDetailComponent } from './saludo-detail.component';
import { SaludoDataService } from './saludo-data.service'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SaludoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
