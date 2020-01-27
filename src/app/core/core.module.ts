import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, LazyLoadImageModule],
  exports: [HttpClientModule, LazyLoadImageModule]
})
export class CoreModule {}
