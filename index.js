const loadQuotes=()=>
{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayData(data))
}

const displayData=(quoteElement)=>
{
    // console.log(quoteElement)
    const quoteEleme=document.getElementById('quotes')
    quoteEleme.innerText=quoteElement.quote;
}