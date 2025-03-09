import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  
  username = "";
  password = "";
  message = "";

  authService = inject(AuthService);
  router = inject(Router)
  login() {
    if (this.authService.login(this.username, this.password)) {
      this.message = "Login successful!";
      this.router.navigate(['/profile']);
    } else {
      this.message = "Invalid credentials.";
    }
  }
}
