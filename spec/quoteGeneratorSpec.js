const QuoteGenerator = require("../quoteGenerator.js");

describe("Quote generator tests", () => {
    let quote;
    beforeEach(() => {
        quote = QuoteGenerator.getQuote();
    });

    it("should return an array of 3 strings ", () => {
        expect(quote.length).toBe(3);
    });

    it("should return non empty strings", () => {
        expect(quote[0]).not.toBe("");
        expect(quote[1]).not.toBe("");
        expect(quote[2]).not.toBe("");
    });

    it("should return random quote parts", () => {
        expect(quote).not.toEqual(QuoteGenerator.getQuote());
    });
});

describe("Quotes generator tests", () => {

    it("should return an array of quotes", () => {
        let arrayOfQuotes = QuoteGenerator.getArrayOfQuotes(1);
        expect(arrayOfQuotes.length).toBe(1);
        arrayOfQuotes = QuoteGenerator.getArrayOfQuotes(2);
        expect(arrayOfQuotes.length).toBe(2);
    });

    it("should return an array of non-empty quotes", () => {
        let arrayOfQuotes = QuoteGenerator.getArrayOfQuotes(5);
        for(i=0;i<5;i++){
            expect(arrayOfQuotes[i]).not.toBe("");
        }
    });

    it("should return an array of strings", () => {
        let arrayOfQuotes = QuoteGenerator.getArrayOfQuotes(5);
        for(i=0;i<5;i++){
            expect(arrayOfQuotes[i]).toEqual(jasmine.any(String));
        }
    });
});