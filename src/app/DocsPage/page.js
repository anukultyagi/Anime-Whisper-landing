// app/docs/page.jsx

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">

            {/* Hero Section */}
            <section className=" py-12">
                <div className="container text-center mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4">Anime Whisper API Documentation</h2>
                    <p className="text-lg">
                        Effortlessly integrate anime quotes into your applications. Our API delivers random or specific quotes for your projects.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Overview</h2>
                <p>
                    The Anime Whisper API is designed to provide you with random anime quotes for your projects. It is lightweight, easy to integrate, and requires no authentication.
                </p>
            </section>

            {/* Endpoint Section */}
            <section id="endpoint" className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Endpoint</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold">Fetch a Random Quote</h3>
                        <p className="mb-2">
                            <code className="bg-gray-200 px-2 py-1 rounded">GET /api/random</code>
                        </p>
                        <p>Returns a single random anime quote from the database.</p>
                        <p className="mt-2">
                            Example Response:
                        </p>
                        <pre className="bg-gray-900 text-white p-4 rounded">
                            <code>
                                {`{
  "id": 1,
  "anime": "Naruto",
  "character": "Naruto Uzumaki",
  "quote": "Believe it!"
}`}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Parameters */}
            <section id="parameters" className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Parameters</h2>
                <p>Some endpoints support query parameters:</p>
                <table className="table-auto w-full text-left border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border border-gray-300">Parameter</th>
                            <th className="px-4 py-2 border border-gray-300">Description</th>
                            <th className="px-4 py-2 border border-gray-300">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">count</td>
                            <td className="px-4 py-2 border border-gray-300">Number of quotes to fetch</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <code>?count=3</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Authentication */}
            <section id="authentication" className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Authentication</h2>
                <p>
                    Currently, the Anime Whisper API does not require authentication. Future updates may include API keys for usage tracking.
                </p>
            </section>

            {/* Error Handling */}
            <section id="error-handling" className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Error Handling</h2>
                <p>All API responses include standard HTTP status codes:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>200 OK:</strong> Request succeeded.</li>
                    <li><strong>400 Bad Request:</strong> Invalid request syntax.</li>
                    <li><strong>500 Internal Server Error:</strong> Something went wrong on our end.</li>
                </ul>
            </section>
            {/* Usage Example Section */}
            <section id="examples" className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Usage Example</h2>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Using cURL</h3>
                    <pre className="bg-gray-900 text-white p-4 rounded">
                        <code>
                            {`curl -X GET "https://anime-whisper-api.netlify.app/api/random"`}
                        </code>
                    </pre>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">JavaScript Fetch Example</h3>
                    <pre className="bg-gray-900 text-white p-4 rounded">
                        <code>
                            {`fetch("https://anime-whisper-api.netlify.app/api/random")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    );
}