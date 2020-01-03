const QuoteGenerator = require("../quoteGenerator.js");

describe("Quote generator tests", () => {
    let quote;
    
    beforeEach(function() {
        quote = QuoteGenerator.getQuote();
    });

    it("should return a and array of 3 strings ", function() {
        expect(quote.length).toBe(3);
    });
});