import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpGeoInfoComponent } from './ip-geo-info.component';

describe('IpGeoInfoComponent', () => {
  let component: IpGeoInfoComponent;
  let fixture: ComponentFixture<IpGeoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpGeoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpGeoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
