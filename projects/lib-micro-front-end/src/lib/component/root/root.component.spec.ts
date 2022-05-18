import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RootComponent } from './root.component';

describe('HomeComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
