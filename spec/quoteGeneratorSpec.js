const QuoteGenerator = require("../quoteGenerator.js");

const quoteSentenceParts = {
    firstPart:[
        "Being happy",
        "Living alone",
        "Never doing",
        "Having fun"
    ],
    secondPart:[
        "is something we do",
        "is what we need",
        "is when we shouldn't do"
    ],
    ThirdPart:[
        "even though we know we shouldn't",
        "although we think we don't",
        "just incase its not for us"
    ]
};

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

    it("should return quote parts from the database", () => {
        expect(quoteSentenceParts.firstPart.includes(quote[0])).toBe(true);
        expect(quoteSentenceParts.secondPart.includes(quote[1])).toBe(true);
        expect(quoteSentenceParts.ThirdPart.includes(quote[2])).toBe(true);
    });
});