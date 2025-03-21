import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmIntensity } from './intensity.component';

describe('RmIntensity', () => {
  let component: RmIntensity;
  let fixture: ComponentFixture<RmIntensity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmIntensity],
    }).compileComponents();

    fixture = TestBed.createComponent(RmIntensity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test.todo('should not render any element when intensity is rest');
  test.todo('should  render an element when intensity is low');
  test.todo('should render two elements when intensity is medium');
  test.todo('should render three elements when intensity is high');
});
