import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { GoodByeComponent } from './good-bye/good-bye.component';
import { NotExistsComponent } from './not-exists/not-exists.component';
import { routing } from './module.routing';
import { MainSubRouteComponent } from './main-sub-route/main-sub-route.component';
import { OverviewRouteComponent } from './main-sub-route/overview-route/overview-route.component';
import { SpecsRouteComponent } from './main-sub-route/specs-route/specs-route.component';
import { HttpModule } from '@angular/http';
import { SubjectService } from './services/subject.service';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodByeComponent,
    NotExistsComponent,
    MainSubRouteComponent,
    OverviewRouteComponent,
    SpecsRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    SharedModule

  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
