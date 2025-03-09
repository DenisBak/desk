import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class ApiService {
  readonly mockWars= [
    {
      link3: [
        {
          src: "https://images.unsplash.com/photo-1590099914662-a76f2f83b802?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8MTY6OXx8fHx8fDE3MTM3ODc4MzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280",
          alt: "Семеновник О. В. 2000-2024",
        },
        {
          src: "https://source.unsplash.com/1600x900/?landscape",
          alt: "Image 1",
        },
        { src: "https://source.unsplash.com/1600x900/?sky", alt: "Image 1" },
      ],
    },
    {
      link4: [
        {
          src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNzEzNzg3Mjcz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
          alt: "Константинопольский И. И. 1910-1960",
        },
        {
          src: "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNzEzNzg3NDU2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
          alt: "Мизулин И. И. 1910-1960",
        },
        {
          src: "https://images.unsplash.com/photo-1575641248750-4b81f06e2360?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8NDozfHx8fHx8MTcxMzc4NzgwNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=960",
          alt: "Христорожденская И. И. 1980-2024",
        },
      ],
    },
    {
      link5: [
        {
          src: "https://source.unsplash.com/1600x900/?waterfall",
          alt: "Image 1",
        },
        { src: "https://source.unsplash.com/1600x900/?forest", alt: "Image 1" },
        { src: "https://source.unsplash.com/1600x900/?sunset", alt: "Image 1" },
        { src: "https://source.unsplash.com/1600x900/?flower", alt: "Image 1" },
      ],
    },
  ];

  getImages() {
    return this.mockWars;
  }
}
