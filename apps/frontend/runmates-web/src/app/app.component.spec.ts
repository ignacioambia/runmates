import { TestBed } from '@angular/core/testing';
import { WebComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });


  it(`should have as title 'runmates-web'`, () => {
    const fixture = TestBed.createComponent(WebComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('runmates-web');
  });
});
