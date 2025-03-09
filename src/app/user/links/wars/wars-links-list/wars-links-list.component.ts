import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wars-links-list',
  templateUrl: './wars-links-list.component.html',
  styleUrl: './wars-links-list.component.css',
  standalone : true,
  imports : [RouterModule]
})
export class WarsLinksListComponent {
  links  = [
    {
      description : 'link 4',
      link : '/link4'
    },
    {
      description : 'link 5',
      link : '/link5'
    },
    {
      description : 'link 6',
      link : '/link6'
    },
      ]
}
