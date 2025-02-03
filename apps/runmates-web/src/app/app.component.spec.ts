import { TestBed } from '@angular/core/testing';
import { WebComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(WebComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome runmates-web'
    );
  });

  it(`should have as title 'runmates-web'`, () => {
    const fixture = TestBed.createComponent(WebComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('runmates-web');
  });
});
