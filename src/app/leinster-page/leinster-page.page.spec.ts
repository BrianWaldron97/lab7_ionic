import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeinsterPagePage } from './leinster-page.page';

describe('LeinsterPagePage', () => {
  let component: LeinsterPagePage;
  let fixture: ComponentFixture<LeinsterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeinsterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeinsterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
