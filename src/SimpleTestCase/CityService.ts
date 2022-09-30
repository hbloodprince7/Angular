export class CityService {
    cities = ['Bengaluru', 'Mumbai', 'Kolkata', 'Chennai', 'New Delhi'];

    getCities() {
        return this.cities;
    }

    addCity(city: string) {
        this.cities.push(city);
    }
}