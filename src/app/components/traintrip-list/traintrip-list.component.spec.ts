import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraintripListComponent} from './traintrip-list.component';

describe('ProductListComponent', () => {
  let component: TraintripListComponent;
  let fixture: ComponentFixture<TraintripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraintripListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraintripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
