import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const CaseStudy = () => {
    return (
        <section id="work" className="py-24 bg-background border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Featured Project</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">HiringBazaar</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            An enterprise-grade HR automation platform designed to simplify and scale the hiring process.
                            HiringBazaar automates job posting, candidate intake, and communication workflows, handling thousands of resumes
                            with queue-based background processing for reliability.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                'Automated candidate intake and parsing',
                                'Queue-based background processing (BullMQ)',
                                'Real-time communication workflows',
                                'Scalable infrastructure handling 10k+ daily requests'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                                    <span className="text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="https://hiringbazaar.in" target="_blank" className="inline-flex items-center gap-2 text-foreground font-bold hover:underline decoration-primary/30 underline-offset-4">
                            View Case Study <ArrowUpRight size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-video rounded-xl border border-border overflow-hidden flex items-center justify-center group shadow-2xl"
                    >
                        <img
                            src="/images/hiringBazaar.png"
                            alt="HiringBazaar Dashboard"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
