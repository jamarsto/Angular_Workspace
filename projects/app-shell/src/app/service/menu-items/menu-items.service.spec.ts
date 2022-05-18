import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MenuItemsService } from './menu-items.service';

describe('MenuItemsService', () => {
  let service: MenuItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(MenuItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
