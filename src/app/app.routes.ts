import { RouterState, Routes } from "@angular/router";

import { TopBarComponent } from "./core/layout/top-bar/top-bar.component";
import { MainImageTextBlockComponent } from "./core/layout/main-image-text-block/main-image-text-block.component";
import { WarsLinksListComponent } from "./user/links/wars/wars-links-list/wars-links-list.component";
import { PhotosListComponent } from "./user/photos/photos-list/photos-list.component";
import { registerLocaleData } from "@angular/common";
import { RegisterComponent } from "./core/auth/register/register.component";
import { LoginComponent } from "./core/auth/login/login.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { TerrorsLinksListComponent } from "./user/links/terrors/terrors-links-list/terrors-links-list.component";
import { AddPhotoComponent } from "./user/add-photo/add-photo.component";

export const routes: Routes = [
  {
    path: "",
    component: MainImageTextBlockComponent,
  },
  {
    path: "wars",
    component: WarsLinksListComponent,
  },
  {
    path: "terrors",
    component: TerrorsLinksListComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: 'photo',
    component: AddPhotoComponent
  },
  {
    path: ":linkId",
    component: PhotosListComponent,
  },

];
