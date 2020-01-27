import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LazyloadImagesComponent } from "./lazyload-images/lazyload-images.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "lazyload-images" },
  { path: "lazyload-images", component: LazyloadImagesComponent },
  { path: "**", pathMatch: "full", component: LazyloadImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
