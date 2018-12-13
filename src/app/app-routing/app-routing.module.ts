import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { ProductsListComponent } from 'src/app/components/products/products-list/products-list.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { NotfoundComponent } from 'src/app/components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from 'src/app/components/products/product-detail/product-detail.component';
const routes: Route[] = [
  {path: 'list', component: ProductsListComponent},
  { path: 'detail/:id', component: ProductDetailComponent },
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},

];
@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
