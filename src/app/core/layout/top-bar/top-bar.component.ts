import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { RouterModule, RouterOutlet } from "@angular/router";

import { RegisterComponent } from "../../auth/register/register.component";
import { AuthService } from "../../auth/auth.service";
@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrl: "./top-bar.component.css",
  standalone: true,
  imports: [RouterOutlet, RouterModule],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  companyName = ".";


 
}
