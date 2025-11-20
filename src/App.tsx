import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      <h1 className="text-3xl font-bold">
        Vite + React + Tailwind Dark Mode
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
        This card will change colors based on the theme.
      </p>

      <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-2">Theme Status</h2>
        <ThemeToggle />
      </div>

    </div>
  );
}

export default App;