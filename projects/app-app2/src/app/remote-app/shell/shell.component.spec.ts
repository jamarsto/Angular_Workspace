import { ComponentFixture, TestBed } from '@angular/core/testing';

import { app-shellComponent } from './app-shell.component';

describe('app-shellComponent', () => {
  let component: app-shellComponent;
  let fixture: ComponentFixture<app-shellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ app-shellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(app-shellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
