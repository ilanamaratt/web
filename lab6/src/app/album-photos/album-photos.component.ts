import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlbumsService } from "../albums.service";
import { Photos } from "../photos";
@Component({
  selector: "app-album-photos",
  templateUrl: "./album-photos.component.html",
  styleUrls: ["./album-photos.component.css"]
})
export class AlbumPhotosComponent implements OnInit {
  loading: boolean;
  photo: Photos[];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.getPhotos(id);
    });
  }

  getPhotos(id: number) {
    this.loading = true;
    this.albumsService.getPhotos(id).subscribe(photo => {
      this.photo = photo;
      this.loading = false;
    });
  }
  goBack() {
    this.location.back();
  }
}
