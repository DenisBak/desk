import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Link } from "../../models/war";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-main-image-text-block",
  templateUrl: "./main-image-text-block.component.html",
  styleUrls: ["./main-image-text-block.component.css"],
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MainImageTextBlockComponent {
  wars: Link[] = [
    { id: 1, name: "first", link : '/link1/{id}' },
    { id: 2, name: "second",  link : '/link1/{id}'},
  ];
  title = "Main text ";
  prgs = [
    "Main text desc"];
  image =
    "some img";
}
