const generateQuoteButtonLife = document.querySelector(".quote-generator__button-life");
const generateQuoteButtonWork = document.querySelector(".quote-generator__button-work");

const createHTMLDivElementTo = (parentElement,contentOfElement) => {
    const div = document.createElement('div');
    div.innerHTML = contentOfElement;
    parentElement.appendChild(div);
}

const generateQuotesFrom = (quotesDatabase) => {
    const quotes = document.querySelector(".quote-generator__random-quote");
    quotes.innerHTML = "";
    const quotesNumber = parseInt(document.querySelector(".quote-generator__quantity").value);
    if(quotesNumber >= 1 && quotesNumber <= 5) {
        const quotesGenerator = new QuoteGenerator(quotesDatabase);
        const randomQuotes = quotesGenerator.getArrayOfQuotes(quotesNumber);
        randomQuotes.forEach((quote) => {
            quote = `" ${quote} "`;
            createHTMLDivElementTo(quotes,quote);
        });
    }else{
        alert("enter a number in the range (1-5)");
    }
}

generateQuoteButtonLife.addEventListener("click", (event)=>{
    event.preventDefault();
    generateQuotesFrom(QuoteSentencePartsLife);
});

generateQuoteButtonWork.addEventListener("click", (event)=>{
    event.preventDefault();
    generateQuotesFrom(QuoteSentencePartsWork);
});