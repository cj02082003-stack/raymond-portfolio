import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certification";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* Hero & About Section */}
      <main id="about" className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20">
        <div className="max-w-4xl text-center">
          <p className="text-blue-400 font-semibold tracking-wide mb-3">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Raymond Esquivel Narvasa
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-gray-400 mb-8 leading-snug">
            Junior Operations Manager | Quality Assurance Manager <br/> Finance Loan Agent
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Dynamic and highly adaptable professional with over 15 years of diverse experience spanning real estate, software quality assurance, finance, and retail operations[cite: 1]. Backed by a foundation in Information Technology Project Management from STI College[cite: 1], I am uniquely equipped to bridge technical execution with client-facing excellence[cite: 1].
          </p>
          
          <div className="flex justify-center flex-wrap gap-4">
            <a href="#experience" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              View My Experience
            </a>
            <a href="https://www.linkedin.com/in/raymond-esquivel-narvasa-550834311/" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </main>

      <Experience />
      <Projects />
      <Certifications />

      {/* Contact & Footer Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-center border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-10">
            Whether it's discussing process improvements, software quality, real estate, or new opportunities, I am always open to connecting.
          </p>
          <a href="https://www.linkedin.com/in/raymond-esquivel-narvasa-550834311/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block">
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>Designed & Built by Raymond Esquivel Narvasa © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}