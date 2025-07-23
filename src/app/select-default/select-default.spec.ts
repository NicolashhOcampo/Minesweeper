import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDefault } from './select-default';

describe('SelectDefault', () => {
  let component: SelectDefault;
  let fixture: ComponentFixture<SelectDefault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDefault]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDefault);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
