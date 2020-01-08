const generateQuoteButton = document.querySelector(".quote-generator__button");

const createHTMLDivElementTo = (parentElement,contentOfElement) => {
    const div = document.createElement('div');
    div.innerHTML = contentOfElement;
    parentElement.appendChild(div);
}

generateQuoteButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const quotes = document.querySelector(".quote-generator__random-quote");
    quotes.innerHTML = "";
    const quotesNumber = parseInt(document.querySelector(".quote-generator__quantity").value);
    if(quotesNumber >= 1 && quotesNumber <= 5) {
        const quotesGenerator = new QuoteGenerator(QuoteSentenceParts);
        const randomQuotes = quotesGenerator.getArrayOfQuotes(quotesNumber);
        randomQuotes.forEach((quote) => {
            createHTMLDivElementTo(quotes,quote);
        });
    }else{
        alert("enter a number in the range (1-5)");
    }
});