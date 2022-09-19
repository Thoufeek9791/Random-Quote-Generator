
const quotesEl = document.querySelector('.quote')
let isFirstQuote = true;
const btn = document.querySelector('button')
const pEl = document.querySelector('p');
const citeEL = document.querySelector('cite');


const getQuotes = async () => {
    const quote = await axios.get('https://type.fit/api/quotes')
    const data = quote.data;
    return data;
}

const getRandomNumber = (data) => {
    let random = Math.floor(Math.random() * data.length)
    return random;
}

onload = async function() {
    const data  = await getQuotes();
    const random = getRandomNumber(data);
    pEl.textContent = data[random].text;
    citeEL.textContent = data[random].author;
}

const clearQuotes = () => {
    if(isFirstQuote) {
        isFirstQuote = false;
    }
    else {
        quotesEl.textContent = '';
    }
}

const makeQuotes =  async () => {
    
        const data = await getQuotes();
        const random = getRandomNumber(data);
        pEl.textContent = data[random].text;
        citeEL.textContent = data[random].author;

}
btn.addEventListener('click', makeQuotes);
