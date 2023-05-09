import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickYMortyComponent } from './rick-ymorty.component';

describe('RickYMortyComponent', () => {
  let component: RickYMortyComponent;
  let fixture: ComponentFixture<RickYMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickYMortyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickYMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
