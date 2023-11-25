import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsbsComponent } from './usbs/usbs.component';
import { JarComponent } from './jar/jar.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsbsComponent,
    JarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
