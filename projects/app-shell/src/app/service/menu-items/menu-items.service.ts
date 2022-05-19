import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItems } from 'lib-micro-front-end';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  constructor(private httpClient: HttpClient) {}

  getMenuItemsForModule(module: string): Observable<MenuItems> {
    return this.httpClient.get('/mfe/' + module + '/assets/menu.json') as Observable<MenuItems>;
  }
}
