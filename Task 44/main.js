function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with following ingredients: ".concat(items.join(','), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "peppers");
make_sandwich("pickles", "olives", "mustard", "mayo");
