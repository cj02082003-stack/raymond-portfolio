// src/components/Experience.tsx

const experienceData = [
  {
    id: 1,
    role: "Quality Assurance Manager",
    company: "BYTEHEADS CORPORATION",
    duration: "Jan 2026 - Present",
    description: [
      "Spearheaded comprehensive QA strategies and established rigorous best practices to ensure delivery of high-quality, user-focused applications.",
      "Directed the full QA lifecycle—including test planning, defect tracking, and release validation.",
      "Leveraged hands-on technical expertise in Responsive Web Design (HTML/CSS3) and version control/hosting (Git, GitHub, cPanel, GoDaddy) for seamless deployments."
    ],
  },
  {
    id: 2,
    role: "Junior Operations Manager",
    company: "APRI REALTORS",
    duration: "Apr 2021 - Present",
    description: [
      "Guided clients through end-to-end sales, property tours, and financial assistance, executing digital marketing campaigns via Canva and Gemini Pro.",
      "Managed payroll and HR administration, overseeing staff attendance and executing accurate computations for all team members.",
      "Served as an official delegate at major industry events like the CREBA National Convention and Philippine Blockchain Week."
    ],
  },
  {
    id: 3,
    role: "Finance Loan Agent",
    company: "88 Asia Finance Corporation",
    duration: "Sep 2024 - Present",
    description: [
      "Evaluated incoming loan applications and verified financial documentation to ensure lending criteria were met.",
      "Successfully processed and approved a high volume of loan applications while cultivating strong relationships and driving repeat business."
    ],
  },
  {
    id: 4,
    role: "Lotto Teller",
    company: "Philippine Charity Sweepstakes Office (PCSO)",
    duration: "Jul 2021 - Aug 2022",
    description: [
      "Managed terminal safety, monitored daily sales volume, and performed accurate daily balancing of cash deposits.",
      "Compiled, validated, and securely routed comprehensive monthly sales reports to the head office for official auditing."
    ],
  },
  {
    id: 5,
    role: "Senior Sales Assistant",
    company: "Ace Hardware Phils. Inc.",
    duration: "Oct 2010 - Jan 2020",
    description: [
      "Honored as a 'Sales Achiever' for consistently delivering excellent, high-level customer service.",
      "Leveraged the Arc BI platform to execute analytics on sales, inventory, and category performance.",
      "Acted as Branch Timekeeping Assistant and led a cross-functional team, conducting comprehensive performance reviews."
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-4">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experienceData.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-0">
              
              {/* Timeline layout wrapper */}
              <div className="md:flex md:gap-8 items-start">
                
                {/* Duration (Left side on desktop) */}
                <div className="md:w-1/4 mt-1 md:text-right mb-2 md:mb-0">
                  <span className="text-blue-400 font-semibold text-sm tracking-wide bg-blue-900/20 px-3 py-1 rounded-full md:bg-transparent md:p-0">
                    {job.duration}
                  </span>
                </div>
                
                {/* Content (Right side on desktop) */}
                <div className="md:w-3/4 relative border-l-2 border-gray-700 pl-6 md:pl-8 pb-4">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></span>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                  <h4 className="text-lg text-gray-400 font-medium mb-4">{job.company}</h4>
                  
                  <ul className="space-y-2">
                    {job.description.map((point, index) => (
                      <li key={index} className="text-gray-400 leading-relaxed flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}