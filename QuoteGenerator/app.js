const quote = document.getElementById("quote")
const author = document.getElementById("author")


const api_url = "https://dummyjson.com/quotes/random";
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;

}
getQuote(api_url);
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=text_to_share", "tweet window", "width = 600, height=300")
}