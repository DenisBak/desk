import { Component, inject } from "@angular/core";
import { ApiService } from "../../../core/http/api.service";
import { JsonPipe, NgFor } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
interface Photo {
  url: string;
  caption: string;
  description : string
}
interface Link {
  [key : string] : Photo[]
}
@Component({
  selector: "app-photos-list",
  templateUrl: "./photos-list.component.html",
  styleUrl: "./photos-list.component.css",
  imports: [NgFor],
  standalone: true,
})
export class PhotosListComponent {
  images = inject(ApiService);
  photos: Photo[] = [];
  linkId: string | null = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.linkId = this.route.snapshot.paramMap.get("linkId");
    this.loadPhotos();
  }

  
  loadPhotos(): void {
    const mockData : Link = {
      link4: [
        { url: 'https://via.placeholder.com/150', caption: 'Фото 1', description: 'Описание 1' },
        { url: 'https://via.placeholder.com/150', caption: 'Фото 2', description: 'Описание 2' }
      ],
      link5: [
        { url: 'https://via.placeholder.com/150', caption: 'Фото 3', description: 'Описание 3' },
        { url: 'https://via.placeholder.com/150', caption: 'Фото 4', description: 'Описание 4' }
      ],
     link6: [
        { url: 'https://via.placeholder.com/150', caption: 'Фото 5', description: 'Описание 5' },
        { url: 'https://via.placeholder.com/150', caption: 'Фото 6', description: 'Описание 6' }
      ],
      link7: [
        { url: 'https://via.placeholder.com/150', caption: 'Фото 7', description: 'Описание 7' },
        { url: 'https://via.placeholder.com/150', caption: 'Фото 8', description: 'Описание 8' }
      ],
      link8: [
        { url: 'https://via.placeholder.com/150', caption: 'Фото 9', description: 'Описание 9' },
        { url: 'https://via.placeholder.com/150', caption: 'Фото 10', description: 'Описание 10' }
      ],
      link9: [
        { url: 'https://via.placeholder.com/150', caption: 'Фото 11', description: 'Описание 11' },
        { url: 'https://via.placeholder.com/150', caption: 'Фото 12', description: 'Описание 12' }
      ]
    };
    this.photos = mockData[this.linkId || ''] || [];
    console.log(this.photos)
  }
  
}
