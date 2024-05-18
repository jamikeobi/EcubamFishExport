import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SpeciesContainerComponent } from './species-container/species-container.component';
import { CongoListComponent } from './species-container/congo-list/congo-list.component';
import { LagosListComponent } from './species-container/lagos-list/lagos-list.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './species-container/search/search.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ImageHeaderDirective } from './customDirective/image-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SpeciesContainerComponent,
    CongoListComponent,
    LagosListComponent,
    AboutComponent,
    SearchComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    CartComponent,
    ProductDetailsComponent,
    ImageHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
