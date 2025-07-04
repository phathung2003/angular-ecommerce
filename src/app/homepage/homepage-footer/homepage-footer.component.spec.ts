import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFooterComponent } from './homepage-footer.component';

describe('HomepageFooterComponent', () => {
  let component: HomepageFooterComponent;
  let fixture: ComponentFixture<HomepageFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageFooterComponent]
    });
    fixture = TestBed.createComponent(HomepageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
