import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CongoListComponent } from './species-container/congo-list/congo-list.component';
import { LagosListComponent } from './species-container/lagos-list/lagos-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'Home', component: HomeComponent},
  {path: 'Congo', component: CongoListComponent},
  {path: 'Lagos', component: LagosListComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'ProductDetails', component: ProductDetailsComponent},
  {path: 'Privacy', component: PrivacyPolicyComponent},
  { path: 'Refund', component: RefundPolicyComponent },
  {path: 'Terms', component: TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
