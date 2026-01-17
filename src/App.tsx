import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import TechStack from './components/TechStack';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import SEO from './components/SEO';

function App() {
    return (
        <HelmetProvider>
            <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
                <SEO
                    title="Paimon Tech Solutions | Expert Web & HR Automation Agency"
                    description="Paimon Tech Solutions provides premium web application development, HR automation (HiringBazaar), and scalable backend architectures. Scale your tech with ease."
                    keywords="web development, HR automation, HiringBazaar, backend architecture, scalable systems, software engineering, Bangalore tech agency"
                />
                <Navbar />
                <main>
                    <Hero />
                    <Services />
                    <CaseStudy />
                    <TechStack />
                    <WhyChooseUs />
                    <Contact />
                </main>

                <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
                    <p>© 2025 Paimon Tech Solutions. All rights reserved.</p>
                </footer>
            </div>
        </HelmetProvider>
    );
}

export default App;
