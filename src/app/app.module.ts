import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChileComponent } from './chile/chile.component';
import { ChildComponent } from './child/child.component';
import { ConComponent } from './con/con.component';
import { ConParComponent } from './con-par/con-par.component';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { ChangeColorDirective } from './change-color.directive';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ChileComponent,
    ChildComponent,
    ConComponent,
    ConParComponent,
    ParentColorComponent,
    ChangeColorDirective,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
