export class CountryModel {
    name: string;
    population: string;
    capital: string;
    flag: string;
  
    constructor(name: string, population: string, capital: string, flag: string) {
      this.name = name;
      this.population = population;
      this.capital = capital;
      this.flag = flag;
    }
}
