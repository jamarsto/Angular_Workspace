import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { MenuItem } from 'lib-micro-front-end';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuItemsService implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  getMenuItemsForModule(module: string): Observable<MenuItem[]> {
    return this.httpClient.get('/mfe/' + module + '/assets/menu.json') as Observable<MenuItem[]>;
  }
}
