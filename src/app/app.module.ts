import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServerssComponent } from './serverss/serverss.component'
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
