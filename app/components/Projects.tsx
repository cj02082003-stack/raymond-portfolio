const projectsData = [
  {
    id: 1,
    title: "PropertyKo | Comprehensive Property Management Platform",
    duration: "Jun 2026 - Present",
    description: "PropertyKo is an end-to-end property management system engineered for seamless business operations. Associated with BYTEHEADS CORPORATION.",
    tech: ["Quality Assurance", "Responsive Web Design"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-700 pb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300 border border-gray-700 hover:border-blue-500">
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-blue-400 mb-3">{project.duration}</p>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}