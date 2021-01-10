import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlockingResolverPage } from './blocking-resolver.page';

describe('BlockingResolverPage', () => {
  let component: BlockingResolverPage;
  let fixture: ComponentFixture<BlockingResolverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockingResolverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockingResolverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
