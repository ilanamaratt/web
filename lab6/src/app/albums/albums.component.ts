import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../albums.service";
import { Albums } from "../list";
@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  list: Albums[];
  loading: boolean;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.loading = true;
    this.albumsService.getAlbums().subscribe(list => {
      this.list = list;
      this.loading = false;
    });
  }

  delete(id: number) {
    this.list = this.list.filter(x => x.id !== id);
  }
}
