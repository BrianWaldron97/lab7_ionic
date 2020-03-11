import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UlsterPagePage } from './ulster-page.page';

describe('UlsterPagePage', () => {
  let component: UlsterPagePage;
  let fixture: ComponentFixture<UlsterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlsterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UlsterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
