import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Albums } from "./list";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Photos } from "./photos";

@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  urll = "https://jsonplaceholder.typicode.com/albums";
  options = new HttpHeaders({
    "Content-type": "application/json; charset=UTF-8"
  });
  constructor(private client: HttpClient) {}

  getAlbums(): Observable<Albums[]> {
    return this.client.get<Albums[]>(this.urll);
  }
  getAlbum(id: number): Observable<Albums> {
    return this.client.get<Albums>(this.urll + "/" + id);
  }
  deleteAlbum(id: number): Observable<any> {
    return this.client.delete<any>(this.urll + "/" + id);
  }
  getPhotos(id: number): Observable<Photos[]> {
    return this.client.get<Photos[]>(this.urll + "/" + id + "/photos");
  }
  updAlbum(list : Albums):Observable<Albums>{
    return this.client.put<Albums>(this.urll + "/" + list.id, list);
  }
}
