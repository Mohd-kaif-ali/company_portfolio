import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Database } from 'lucide-react';

const services = [
    {
        icon: <Code2 size={32} />,
        title: 'Web App Development',
        description: 'Custom, high-performance web applications built with modern frameworks like React and Next.js.'
    },
    {
        icon: <Users size={32} />,
        title: 'HR Automation',
        description: 'Streamlining recruitment and employee management with intelligent workflows and queue-based processing.'
    },
    {
        icon: <Database size={32} />,
        title: 'Backend Architecture',
        description: 'Robust, scalable backend systems designed to handle high concurrency and massive data loads.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
                    <div className="h-1 w-20 bg-primary/20"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 border border-border bg-background hover:shadow-lg transition-all duration-300 rounded-xl group"
                        >
                            <div className="mb-6 text-muted-foreground group-hover:text-primary transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
