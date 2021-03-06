import { Component, OnInit } from "@angular/core";

import { SignUpCredentials } from "../../../models/Authentication/SignUpCredentials";
import { SignUpWebService } from "../../../web-services/authentication-web-services/sign-up.web-service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  private passwordConfirmation: string;
  signUpCredentials: SignUpCredentials = {
    email: "benkenobi@mail.com",
    firstName: "ben",
    lastName: "Kenobi",
    password: "Bings",
    phoneNumber: "+380978343432"
  };
  constructor(private signUpWebService: SignUpWebService) {}
  ngOnInit() {}
  OnSignUp() {
    this.signUpWebService
      .SignUp(this.signUpCredentials)
      .subscribe(registered => console.log(registered));
  }
}
