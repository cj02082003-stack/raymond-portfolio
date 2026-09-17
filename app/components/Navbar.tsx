import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          Raymond<span className="text-blue-500">.</span>
        </Link>
        <div className="hidden md:flex gap-6 text-gray-300 font-medium">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#certifications" className="hover:text-white transition-colors">Certifications</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}