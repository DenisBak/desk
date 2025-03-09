
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-terrors-links-list',
  templateUrl: './terrors-links-list.component.html',
  styleUrl: './terrors-links-list.component.css',
  standalone : true,
  imports : [ RouterModule]
})
export class TerrorsLinksListComponent {
  links  = [
    {
      description : 'link 7',
      link : '/link7'
    },
    {
      description : 'link 8',
      link : '/link8'
    },
    {
      description : 'link 9',
      link : '/link9'
    },
      ]
}
