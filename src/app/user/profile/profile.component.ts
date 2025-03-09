import { Component, inject } from "@angular/core";
import { AuthService } from "../../core/auth/auth.service";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProfileComponent {
  user: any;

  AuthService = inject(AuthService);
  router = inject(Router)
  ngOnInit() {
    this.user = this.AuthService.getCurrentUser();
  }

  logout() {
    this.AuthService.logout();
    this.user = null;
    this.router.navigate(["/"]);
  }
}
