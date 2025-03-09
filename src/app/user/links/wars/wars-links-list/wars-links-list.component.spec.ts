import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarsLinksListComponent } from './wars-links-list.component';

describe('WarsLinksListComponent', () => {
  let component: WarsLinksListComponent;
  let fixture: ComponentFixture<WarsLinksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WarsLinksListComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(WarsLinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
