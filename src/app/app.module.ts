import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { HomeComponent } from "./component/home/home.component";
// import { NewsComponent } from "./component/news/news.component";
// import { PlansComponent } from "./component/plans/plans.component";
// import { HelpComponent } from "./component/help/help.component";
// import { AboutComponent } from "./component/about/about.component";
import { SignupComponent } from "./component/signup/signup.component";
import { RouterModule, Routes } from "../../node_modules/@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { EmployeeComponent } from './component/employee/employee.component';
import { SkillsetComponent } from './component/skillset/skillset.component';
import { ManagerComponent } from './component/manager/manager.component';
import { EmpdashboardComponent } from './component/empdashboard/empdashboard.component';
import { ManagerAnalysisComponent } from './manager-analysis/manager-analysis.component';
const routes: Routes = [
  // { path: "home", component: HomeComponent },
  // { path: "news", component: NewsComponent },
  // { path: "plans", component: PlansComponent },
  // { path: "help", component: HelpComponent },
  // { path: "about", component: AboutComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "skillset", component:SkillsetComponent },
  { path: "empdashboard", component: EmpdashboardComponent },
  { path: "manager", component:ManagerComponent },
  { path: "manager-analysis", component:ManagerAnalysisComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // NewsComponent,
    // PlansComponent,
    // HelpComponent,
    // AboutComponent,
    SignupComponent,
    LoginComponent,
    EmployeeComponent,
    SkillsetComponent,
    ManagerComponent,
    EmpdashboardComponent,
    ManagerAnalysisComponent
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
