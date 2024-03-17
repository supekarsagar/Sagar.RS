import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlSideMenuComponent } from './mysql-side-menu.component';

describe('MysqlSideMenuComponent', () => {
  let component: MysqlSideMenuComponent;
  let fixture: ComponentFixture<MysqlSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlSideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysqlSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
