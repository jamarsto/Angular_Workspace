import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  getMenuItemsForModule(module: string): Observable<any> {
    return this.httpClient.get('./mfe/' + module + '/assets/menu.json');
  }
}
