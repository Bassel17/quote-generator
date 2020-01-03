const QuoteGenerator = require("../quoteGenerator.js");

describe("Quote generator tests", () => {
    it("should return a and array of 3 strings ", function() {
        let quote = QuoteGenerator.getQuote();
        expect(quote.length).toBe(3);
    });
});