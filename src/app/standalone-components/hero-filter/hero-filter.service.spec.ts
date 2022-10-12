import { Hero } from '../../modules/heros/models/hero.model';
import { HeroFilterService } from './hero-filter.service';

describe('HeroFilterService', () => {
  let service: HeroFilterService;

  beforeEach(() => {
      service = new HeroFilterService();
    
  });

  it('should be created filter', () => {
      expect(service).toBeTruthy();
      const response = service.search('Superman')
     expect(new Hero(response[0])).toBeInstanceOf(Hero)
  });
});
