import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [],
  imports: [CommonModule, LazyLoadImageModule],
  exports: [CommonModule, LazyLoadImageModule]
})
export class SharedModule {}
