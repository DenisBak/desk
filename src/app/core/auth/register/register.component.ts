import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

import { MatInputModule } from "@angular/material/input";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  authService = inject(AuthService);
  private router = inject(Router);
  name = "";
  password = "";
  message = "";
  mail = "";
  code = "";
  register() {
    if (this.authService.register(this.name, this.password)) {
      this.message = "Registration Successful";
      this.router.navigate(["/login"]);
    } else {
      this.message = "User already exists";
    }
  }
}
