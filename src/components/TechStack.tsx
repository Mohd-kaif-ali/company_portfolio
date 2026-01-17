import React from 'react';

const techs = [
    'React', 'Next.js', 'Node.js', 'TypeScript',
    'Redis', 'BullMQ', 'PostgreSQL', 'Docker', 'AWS'
];

const TechStack = () => {
    return (
        <section id="tech" className="py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <h2 className="text-2xl font-bold text-white/40 mb-8">Powered by High-Performance Tech</h2>
            </div>

            <div className="relative flex overflow-hidden w-full select-none group">
                <div className="animate-marquee whitespace-nowrap flex gap-12">
                    {techs.map((tech) => (
                        <span key={tech} className="text-4xl md:text-6xl font-bold text-white/20 uppercase tracking-tighter hover:text-white/40 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                    {techs.map((tech) => (
                        <span key={`${tech}-duplicate`} className="text-4xl md:text-6xl font-bold text-white/20 uppercase tracking-tighter hover:text-white/40 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                    {techs.map((tech) => (
                        <span key={`${tech}-duplicate-2`} className="text-4xl md:text-6xl font-bold text-white/20 uppercase tracking-tighter hover:text-white/40 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>

            <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
        </section>
    );
};

export default TechStack;
