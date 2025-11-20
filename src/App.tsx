import { Navbar } from "./components/Navbar";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-dark-text">
      <Navbar />
      
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-center">
              Welcome to My Portfolio
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-dark-text text-center max-w-2xl">
              This is your personal portfolio with a beautiful responsive navbar
            </p>
          </section>

          <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="p-8 rounded-xl shadow-lg bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">About</h2>
              <p className="text-gray-600 dark:text-dark-text">About section content goes here.</p>
            </div>
          </section>

          <section id="projects" className="min-h-screen flex items-center justify-center">
            <div className="p-8 rounded-xl shadow-lg bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              <p className="text-gray-600 dark:text-dark-text">Projects section content goes here.</p>
            </div>
          </section>

          <section id="contact" className="min-h-screen flex items-center justify-center">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;