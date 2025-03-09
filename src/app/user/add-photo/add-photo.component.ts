import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCard } from "@angular/material/card";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrl: './add-photo.component.css',
  standalone : true, 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
})

export class AddPhotoComponent {
  name = "";
  surname = "";
  lastName = "";

  loadPhoto(){
    console.log('Hello')
  }
  addPhoto(){
    console.log('Hello')
  }
}
