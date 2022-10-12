import { TestBed } from '@angular/core/testing';
import { Hero } from '../../modules/heros/models/hero.model';
import { HeroFilterService } from './hero-filter.service';

describe('HeroFilterService', () => {
  let service: HeroFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroFilterService);
  });

  it('should be created', () => {
      expect(service).toBeTruthy();
      const response = service.search('Supe')
      expect(response[0]).toBeInstanceOf(Hero)
  });
});
