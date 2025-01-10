import cors, { runMiddleware } from '@/app/lib/cors';
import quotes from '../../../data/quotes.json'


export async function GET(re, res) {

    await runMiddleware(req, res, cors);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return Response.status(200).json(randomQuote);


} 