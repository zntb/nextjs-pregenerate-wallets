import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3005/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
              <span className="block">Welcome to our</span>
              <span className="block text-indigo-600">NewsletterHub</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
              Join for free, and receive the latest newsletters straight to your
              inbox.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <form className="sm:flex" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  className="block w-full px-4 py-2 text-base text-gray-900 placeholder-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
                {status && (
                  <p
                    className={`mt-2 text-sm ${
                      status.includes("error")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
