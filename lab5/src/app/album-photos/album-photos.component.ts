import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { list } from "../albums/list";
@Component({
  selector: "app-album-photos",
  templateUrl: "./album-photos.component.html",
  styleUrls: ["./album-photos.component.css"]
})
export class AlbumPhotosComponent implements OnInit {
  list;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("listId"));

    // Find the product that correspond with the id provided in route.
    this.list = list.find(list => list.id === id);
  }
  Back() {
    this.location.back();
  }
}
