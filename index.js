const generateQuoteButton = document.querySelector(".quote-generator__button");

const createHTMLDivElementTo = (parentElement,contentOfElement) => {
    const div = document.createElement('div');
    div.innerHTML = contentOfElement;
    parentElement.appendChild(div);
}

generateQuoteButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const quotes = document.querySelector(".quote-generator__random-quote");
    const quotesNumber = parseInt(document.querySelector(".quote-generator__quantity").value);
    const quotesGenerator = new QuoteGenerator(QuoteSentenceParts);
    const randomQuotes = quotesGenerator.getArrayOfQuotes(quotesNumber);
});