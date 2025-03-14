import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmMessage } from './message.component';

describe('RmMessage', () => {
  let component: RmMessage;
  let fixture: ComponentFixture<RmMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(RmMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test.todo('Should display default if no profile pic is provided');
});
