import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export type MenuItem = { title: string, link: string, fullMatch: boolean }

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
