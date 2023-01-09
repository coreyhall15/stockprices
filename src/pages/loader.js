
export const priceLoader = async ({ params }) => {
    const symbol = params.symbol;
    const apiKey = "d2eab6e5ade4153228fb0cc6c712c436"; //this NEED TO BE YOUR KEY!
    return (await fetch(
        `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`)).json();
    }
        
    