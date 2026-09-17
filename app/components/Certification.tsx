const certificationsData = [
  {
    id: 1,
    title: "Prompt Like an Engineer",
    issuer: "Cisco Networking Academy",
    date: "Issued Sep 2026",
    credentialId: "72ba89bd-16d6-46e8-bc22-298d406d8f7a",
  },
  {
    id: 2,
    title: "AI Fundamentals: Language and Vision in AI - IBM SkillsBuild",
    issuer: "Cisco Networking Academy",
    date: "Issued Sep 2026",
    credentialId: "32c68628-f83d-4e50-a58e-ad37aa46d810",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-700 pb-4">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-gray-300 font-medium mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date} · Credential ID {cert.credentialId}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}