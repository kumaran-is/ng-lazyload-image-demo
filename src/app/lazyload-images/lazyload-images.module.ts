import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { LazyloadImagesRoutingModule } from "./lazyload-images-routing.module";

@NgModule({
  declarations: [LazyloadImagesRoutingModule.components],
  imports: [CommonModule, LazyLoadImageModule, LazyloadImagesRoutingModule]
})
export class LazyloadImagesModule {}
