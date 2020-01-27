import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ImageService } from "./core/image.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Lazy Load Image Demo";
  defaultImage = "https://via.placeholder.com/2100x80";

  public images$: Observable<{ url: string }[]>;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages();
  }
}
