import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroApiService } from 'src/app/modules/heros/hero.api.service';

import { ActionsComponent } from './actions.component';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;
  let _heroApi: HeroApiService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            ActionsComponent,
            HttpClientTestingModule],
        declarations: [],
        providers: [HeroApiService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
      fixture.detectChanges();
      _heroApi = fixture.debugElement.injector.get(HeroApiService);
  });
    

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
