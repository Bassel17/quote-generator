const QuoteGenerator = require("../quoteGenerator.js");
const QuoteSentenceParts = require("../quotePartsDatabase.js");
const generateQuoteButton = document.getElementsByClassName("quote-generator__button");

generateQuoteButton.addEventListener("click", ()=>{
    const quote = document.getElementsByClassName("quote-generator__random-quote");
    const quoteGenerator = new QuoteGenerator(QuoteSentenceParts);
    
});