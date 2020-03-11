import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunsterPagePage } from './munster-page.page';

describe('MunsterPagePage', () => {
  let component: MunsterPagePage;
  let fixture: ComponentFixture<MunsterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunsterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunsterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
