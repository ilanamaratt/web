import { Component, OnInit } from "@angular/core";
import { list } from "../albums/list";
@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  list = list;
  constructor() {}

  ngOnInit() {}
  delete(id: number) {
    this.list = this.list.filter(x => x.id !== id);
  }
  add(){
    
  }
}
