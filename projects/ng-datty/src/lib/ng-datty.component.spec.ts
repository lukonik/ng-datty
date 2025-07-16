import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDattyComponent } from './ng-datty.component';

describe('NgDattyComponent', () => {
  let component: NgDattyComponent;
  let fixture: ComponentFixture<NgDattyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDattyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgDattyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
