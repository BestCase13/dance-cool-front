import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutenticationComponent } from "./autentication/autentication.component";
import { SignInComponent } from "./autentication/sign-in/sign-in.component";
import { SignUpComponent } from "./autentication/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "",
    component: AutenticationComponent,
    children: [
      { path: "sign-in", component: SignInComponent },
      { path: "sign-up", component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
