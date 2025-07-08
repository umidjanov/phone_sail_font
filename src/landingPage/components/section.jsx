import { Link } from "react-router-dom";

export default function Section() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            All phones essentials.
          </h2>
          <Link
            to="/accessors"
            className="text-blue-600 hover:underline text-base font-medium flex items-center cursor-pointer"
          >
            All phones accessories
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div className="border rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 relative">
            <a
              href="/accessors"
              className="absolute inset-0 z-0"
              aria-hidden="true"
            />
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">
              All phone accessories
            </h3>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed w-[300px]">
              Explore colorful cases, USB‑C power adapters, MagSafe accessories,
              and more.
            </p>
            <Link
              href="/accessors"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline text-sm font-medium z-10 relative"
            >
              Shop iPhone accessories
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <img
              src="videos/iphone accesures.jpg"
              alt="iPhone accessories"
              className="mt-6 rounded-lg"
            />
          </div>

          {/* //AirTag// */}

          <div className="border rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 relative">
            <a
              href="/accessors"
              className="absolute inset-0 z-0"
              aria-hidden="true"
            />
            <h3 className="text-xl font-semibold text-gray-900 z-10 relative">
              AirTag
            </h3>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              Attach one to your keys. Put another in your{" "}
              <br className="hidden sm:inline" />
              backpack. If they’re misplaced, just use the Find My app.
            </p>
            <a
              href="/accessors"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline text-sm font-medium z-10 relative"
            >
              Buy
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <img
              src="videos/accessures2.jpg"
              alt="AirTag"
              className="mt-6 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
