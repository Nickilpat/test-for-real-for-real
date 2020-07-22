import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoremPicsumComponent } from './lorem-picsum/lorem-picsum.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        LoremPicsumComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-for-real-for-real'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-for-real-for-real');
  });

});
