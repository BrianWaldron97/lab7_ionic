import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnaughtCountiesPagePage } from './connaught-counties-page.page';

describe('ConnaughtCountiesPagePage', () => {
  let component: ConnaughtCountiesPagePage;
  let fixture: ComponentFixture<ConnaughtCountiesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnaughtCountiesPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnaughtCountiesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
