import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Anime Whisper API</title>
        <meta name="description" content="Generate random anime quotes using Anime Whisper API." />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Anime Whisper API</h1>
        <p className="text-lg mb-8 text-center max-w-lg">
          Use the Anime Whisper API to generate random anime quotes with speaker details and anime names.
        </p>

        <div className="bg-white text-indigo-600 rounded-lg shadow-lg p-6 max-w-md">
          <h2 className="text-xl font-semibold mb-4">API Endpoint</h2>
          <code className="block bg-gray-100 text-gray-800 p-3 rounded-md mb-4">
            GET /random
          </code>
          <h3 className="text-lg font-medium mb-2">Example Response:</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-auto">
            {`{
  "id": 1,
  "quote": "Power comes in response to a need, not a desire.",
  "character": "Goku",
  "anime": "Dragon Ball Z"
}`}
          </pre>
        </div>
        <footer className="mt-12 text-sm">
          Built with ❤️ for anime lovers.
        </footer>
      </main>
    </div>
  );
}
