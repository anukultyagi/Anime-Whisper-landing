export default function EndpointsSection() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Explore Our Endpoints
                </h2>
                <p className="text-center text-gray-600 mt-2">
                    Access powerful quotes from your favorite anime with our API.
                </p>

                {/* Two-Column Layout */}
                <div className="mt-8 grid items-center grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Endpoints */}
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-600">
                            API Endpoints
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className=" text-gray-600">
                                <span className="font-semibold tracking-widest text-gray-800">/api/random</span> - Get a random anime quote.
                            </li>
                            <li className=" text-gray-600">
                                <span className="font-semibold tracking-widest text-gray-800">/api</span> - Fetch multiple quotes (5 at a time).
                            </li>
                            <li className=" text-gray-600">
                                <span className="font-semibold tracking-widest text-gray-800">/docs</span> - Access detailed API documentation.
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Mock Response */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-lg font-bold text-gray-700">Sample Response (/api/random)</h4>
                        <pre className="bg-gray-100 p-4 mt-2 rounded-lg text-sm text-gray-700 overflow-x-auto">
                            {`{
    "quote": "Fear is not evil. It tells you what your weakness is.",
    "speaker": "Gildarts Clive",
    "anime": "Fairy Tail"
  }`}
                        </pre>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                    <a
                        href="/docs"
                        className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-500"
                    >
                        View Detailed Docs
                    </a>
                </div>
            </div>
        </section>
    );
}
