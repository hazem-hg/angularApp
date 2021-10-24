import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogouttComponent } from './logoutt.component';

describe('LogouttComponent', () => {
  let component: LogouttComponent;
  let fixture: ComponentFixture<LogouttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogouttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogouttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
