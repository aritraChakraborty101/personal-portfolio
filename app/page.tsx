export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Building amazing things with Next.js and Tailwind CSS
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This is a clean starter template for your portfolio. Tailwind CSS is working perfectly!
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Showcase your best work here with responsive cards and beautiful styling.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Test Tailwind Classes
            </h2>
            <div className="space-y-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Primary Button
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-6 rounded-lg transition-colors ml-4">
                Secondary Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
