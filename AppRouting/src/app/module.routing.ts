import { OverviewRouteComponent } from './main-sub-route/overview-route/overview-route.component';
import { MainSubRouteComponent } from './main-sub-route/main-sub-route.component';
import { GoodByeComponent } from './good-bye/good-bye.component';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NotExistsComponent } from './not-exists/not-exists.component';
import { SpecsRouteComponent } from './main-sub-route/specs-route/specs-route.component';
import { ProductsRoutingModule } from './products/products-routing.module';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/hello',
      pathMatch: 'full'
    },
    { path: 'hello', component: HelloComponent },
    { path: 'goodbye', component: GoodByeComponent },
    { path: 'products/:id', component: MainSubRouteComponent,
      children: [
        { path: '', component: OverviewRouteComponent },
        { path: 'overview', component: OverviewRouteComponent},
        { path: 'specs', component: SpecsRouteComponent}
      ]
    },
    {path: 'submodule', loadChildren: 'app/products/products.module#ProductsModule', data: { preload: true }},
    { path: '**', component: NotExistsComponent }
  ];

export const routing = RouterModule.forRoot(routes);
