import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskModule, IConfig } from 'ngx-mask'
const maskConfig: Partial<IConfig> = {
  validation: false,
};
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestConnComponent } from './test-conn/test-conn.component';

import { ModalPizzaService } from '../app/myservices/modal-pizza/modal-pizza.service';
import { ClientService } from '../app/myservices/account/client.service';


import { AppNavComponent } from './myapp/app-nav/app-nav.component';
import { HomePageComponent } from './myapp/home-page/home-page.component';
import { PizzasComponent } from './myapp/home-components/pizzas/pizzas.component';
import { IngredientsComponent } from './myapp/home-components/ingredients/ingredients.component';
import { LogInComponent } from './myapp/account/log-in/log-in.component';
import { RegistrationComponent } from './myapp/account/registration/registration.component';
import { ClientPageComponent } from './myapp/account/client-page/client-page.component';
import { NotFoundPageComponent } from './myapp/not-found-page/not-found-page.component';
import { CartPageComponent } from './myapp/cart-page/cart-page.component';
import { DishesComponent } from './myapp/home-components/dishes/dishes.component';
import { OrderPageComponent } from './myapp/order-page/order-page.component';
import { MenuNavComponent } from './myapp/menu-nav/menu-nav.component';
import { RatingPageComponent } from './myapp/rating-page/rating-page.component';
import { SearhBlockComponent } from './myapp/home-components/searh-block/searh-block.component';



@NgModule({
  declarations: [
    AppComponent,
    TestConnComponent,
    AppNavComponent,
    HomePageComponent,
    PizzasComponent,
    IngredientsComponent,
    LogInComponent,
    RegistrationComponent,
    ClientPageComponent,
    NotFoundPageComponent,
    CartPageComponent,
    DishesComponent,
    OrderPageComponent,
    MenuNavComponent,
    RatingPageComponent,
    SearhBlockComponent,
       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxUsefulSwiperModule
  ],
  providers: [ModalPizzaService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
