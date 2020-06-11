import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremPicsumComponent } from './lorem-picsum.component';

describe('LoremPicsumComponent', () => {
  let component: LoremPicsumComponent;
  let fixture: ComponentFixture<LoremPicsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremPicsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremPicsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
