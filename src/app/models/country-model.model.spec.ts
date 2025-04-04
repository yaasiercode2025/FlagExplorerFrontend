import { CountryModel } from './country-model.model';

describe('CountryModel', () => {
  it('should create an instance', () => {
    expect(new CountryModel("South Africa","10","Cape Town","image")).toBeTruthy();
  });
});
