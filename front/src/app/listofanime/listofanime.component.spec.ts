import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofanimeComponent } from './listofanime.component';

describe('ListofanimeComponent', () => {
  let component: ListofanimeComponent;
  let fixture: ComponentFixture<ListofanimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofanimeComponent]
    });
    fixture = TestBed.createComponent(ListofanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
