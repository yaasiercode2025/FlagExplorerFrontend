import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CountryService', () => {
  //let service: CountryService;

  let countryService: CountryService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    }).compileComponents();

    countryService = TestBed.inject(CountryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(countryService).toBeTruthy();
  });


  
it('should fetch countries', fakeAsync(() => {
  const mockCountries = [{ name: 'Italy' }, { name: 'Belgium' }];

  countryService.getAllCountries().subscribe(countries => {
    expect(countries).toEqual(mockCountries);
  });

  const req = httpMock.expectOne('http://localhost:5011/countries');
  expect(req.request.method).toBe('GET');
  req.flush(mockCountries); 
  tick(); 
}));


it('should fetch country by name', fakeAsync(() => {
  const mockCountry =  'Italy' ;

  countryService.getCountryDetailsByName("Italy").subscribe(country => {
    expect(country).toEqual(mockCountry);
  });

  const req = httpMock.expectOne('http://localhost:5011/countries/' + mockCountry);
  expect(req.request.method).toBe('GET');
  req.flush(mockCountry); 
  tick(); 
}));

afterEach(() => {
    httpMock.verify(); 
  });
});
