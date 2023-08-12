import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsingComponent } from './logsing.component';

describe('LogsingComponent', () => {
  let component: LogsingComponent;
  let fixture: ComponentFixture<LogsingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogsingComponent]
    });
    fixture = TestBed.createComponent(LogsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
