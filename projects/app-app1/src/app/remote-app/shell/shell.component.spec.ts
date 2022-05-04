import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shellComponent } from './shell.component';

describe('shellComponent', () => {
  let component: shellComponent;
  let fixture: ComponentFixture<shellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ shellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(shellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
