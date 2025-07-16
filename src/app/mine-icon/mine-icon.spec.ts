import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineIcon } from './mine-icon';

describe('MineIcon', () => {
  let component: MineIcon;
  let fixture: ComponentFixture<MineIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
