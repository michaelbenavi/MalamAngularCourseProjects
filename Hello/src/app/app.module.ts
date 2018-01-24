import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DoubleMePipe } from './shared/pipes/double-me.pipe';
import { ShowMyAgePipe } from './shared/pipes/show-my-age.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifeCycleComponent,
    DoubleMePipe,
    ShowMyAgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
