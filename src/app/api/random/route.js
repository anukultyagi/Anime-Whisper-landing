import cors, { runMiddleware } from '@/app/lib/cors';
import quotes from '../../../data/quotes.json';

export async function GET(req, res) {
    // Run the CORS middleware
    await runMiddleware(req, res, cors);

    // Generate a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Send the response
    res.status(200).json(randomQuote);
}
