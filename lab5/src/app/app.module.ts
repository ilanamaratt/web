import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { AlbumsComponent } from "./albums/albums.component";
import { AlbumDetailsComponent } from "./album-details/album-details.component";
import { AlbumPhotosComponent } from "./album-photos/album-photos.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
