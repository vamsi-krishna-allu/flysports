import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SoccerComponent } from './soccer/soccer.component';
import { VolleyBallComponent } from './volley-ball/volley-ball.component';
import { BasketBallComponent } from './basket-ball/basket-ball.component';
import { BadmintonComponent } from './badminton/badminton.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'soccer', component: SoccerComponent },
  { path: 'volley-ball', component: VolleyBallComponent },
  { path: 'basket-ball', component: BasketBallComponent },
  { path: 'badminton', component: BadmintonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
