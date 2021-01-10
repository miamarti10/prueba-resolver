import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonBlockingResolverPage } from './non-blocking-resolver.page';

describe('NonBlockingResolverPage', () => {
  let component: NonBlockingResolverPage;
  let fixture: ComponentFixture<NonBlockingResolverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonBlockingResolverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonBlockingResolverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
