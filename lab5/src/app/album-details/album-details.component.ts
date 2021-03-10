import { Component, OnInit } from "@angular/core";
import { list } from "../albums/list";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent implements OnInit {
  list;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // First get the product id from the current route.
    const id = +this.route.snapshot.paramMap.get("id");

    const routeParams = this.route.snapshot.paramMap;
    const listIdFromRoute = Number(routeParams.get("listId"));

    // Find the product that correspond with the id provided in route.
    this.list = list.find(list => list.id === id);
  }
  goBack() {
    this.location.back();
  }
}
