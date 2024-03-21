function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with following ingredients: ${items.join(',')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "peppers");
make_sandwich("pickles", "olives", "mustard", "mayo");