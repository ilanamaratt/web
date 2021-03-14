import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AlbumsService } from "../albums.service";
import { Albums } from "../list";
@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent implements OnInit {
  list: Albums;
  newtitle: string;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.getPost(id);
    });
  }
  getPost(id: number) {
    this.loading = true;
    this.albumsService.getAlbum(id).subscribe(list => {
      this.list = list;
      this.loading = false;
    });
  }
  goBack() {
    this.location.back();
  }
  add(list: Albums) {
    if (this.list.title !== "") {
      list.title = this.newtitle;
      this.albumsService.updAlbum(list);
      this.newtitle = "";
    }
  }
}
