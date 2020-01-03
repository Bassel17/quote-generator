const QuoteSentenceParts = {
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
    thirdPart:[
        "even though we know we shouldn't",
        "although we think we don't",
        "just incase its not for us"
    ]
}

const generateRandomNumberBetween = (minimumNumber,maximumNumber) => {
    minimumNumber = Math.ceil(minimumNumber);
    maximumNumber = Math.floor(maximumNumber);
    const randomNumber = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;
    return randomNumber;
}

class QuoteGenerator {
    constructor(quoteSentenceParts){
        this.quoteSentenceParts = quoteSentenceParts;
    }

    getQuote(){
        const firstPart = this.quoteSentenceParts.firstPart[generateRandomNumberBetween(0,2)];
        const secondPart = this.quoteSentenceParts.secondPart[generateRandomNumberBetween(0,2)];
        const thirdPart = this.quoteSentenceParts.thirdPart[generateRandomNumberBetween(0,2)];
        const quote = [firstPart,secondPart,thirdPart];
        return quote;
    }
}

module.exports = new QuoteGenerator(QuoteSentenceParts);