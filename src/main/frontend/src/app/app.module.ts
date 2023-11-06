import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { BasketBallComponent } from './basket-ball/basket-ball.component';
import { VolleyBallComponent } from './volley-ball/volley-ball.component';
import { SoccerComponent } from './soccer/soccer.component';
import { BadmintonComponent } from './badminton/badminton.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ShopComponent,
    LoginComponent,
    BasketBallComponent,
    VolleyBallComponent,
    SoccerComponent,
    BadmintonComponent
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
