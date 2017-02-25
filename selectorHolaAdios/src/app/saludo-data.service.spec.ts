import { TestBed, inject } from '@angular/core/testing';
import { SaludoDataService } from './saludo-data.service';
import { Saludo} from './saludo'; 

describe('SaludoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaludoDataService]
    });
  });

  it('should ...', inject([SaludoDataService], (service: SaludoDataService) => {
    expect(service).toBeTruthy();
  }));
});
