import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { NewsComponent } from "./component/news/news.component";
import { PlansComponent } from "./component/plans/plans.component";
import { HelpComponent } from "./component/help/help.component";
import { AboutComponent } from "./component/about/about.component";
import { SignupComponent } from "./component/signup/signup.component";
import { RouterModule, Routes } from "../../node_modules/@angular/router";
import { LoginComponent } from "./component/login/login.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "plans", component: PlansComponent },
  { path: "help", component: HelpComponent },
  { path: "about", component: AboutComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    PlansComponent,
    HelpComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
