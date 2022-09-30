import { CityService } from './CityService';

fdescribe('CityService', ()=>{
    let cityService: CityService;
    beforeEach(()=> {
        cityService = new CityService();
    });
    afterEach(()=> {

    });
it('Array Test',()=>{
    let a=[1,2,3];
    expect(a).toEqual([1,2,3]);
});
it('Should check if specified cities are present', ()=> {
    const cities = cityService.getCities();
    expect(cities).toContain('Bengaluru');
    expect(cities).toContain('Mumbai');
});
it('Should check if new city is added', ()=>{
    const newCity = 'Pune';
    cityService.addCity(newCity);
    expect(cityService.cities).toContain(newCity);
});
});