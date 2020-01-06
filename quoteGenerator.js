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

    getArrayOfQuotes(numberOfQuotes = 1){
        const arrayOfQuotes = [];
        for(let i=0; i<numberOfQuotes ; i++){
            let quote = this.getQuote().join(' ');
            if(arrayOfQuotes.includes(quote)){
                i--;
            }else{
                arrayOfQuotes.push(quote);
            }
        }
        return arrayOfQuotes;
    }
}

module.exports = QuoteGenerator;