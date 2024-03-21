function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Nissan", "GTR-R35", ["color", "red"], ["year", 2007]));
console.log(make_car("Audi", "Q5", ["color", "blue"], ["sunroof", true]));