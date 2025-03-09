import { Component } from '@angular/core';
import { FooterComponent } from './core/layout/footer/footer.component';
import { MainImageTextBlockComponent } from './core/layout/main-image-text-block/main-image-text-block.component';
import { TopBarComponent } from './core/layout/top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports : [FooterComponent ,MainImageTextBlockComponent,TopBarComponent  , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true
})
export class AppComponent {
  title = 'memory';
}
