import { quotes } from "../../../../data";



export async function GET() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return Response.json(randomQuote);
} 