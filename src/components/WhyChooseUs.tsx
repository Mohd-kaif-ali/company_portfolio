import React from 'react';
import { Zap, Shield, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Built for Scale. <br />Engineered for Trust.</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            We don't just write code; we solve complex business problems. Our engineering philosophy centers on
                            performance, reliability, and long-term maintainability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="flex gap-4">
                            <div className="p-3 bg-secondary/50 rounded-lg h-fit text-foreground"><Zap size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Performance First</h3>
                                <p className="text-muted-foreground">Every line of code is optimized for speed and efficiency, ensuring minimal latency.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-secondary/50 rounded-lg h-fit text-foreground"><Shield size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Robust Security</h3>
                                <p className="text-muted-foreground">Security best practices integrated from day one, protecting your data and users.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-secondary/50 rounded-lg h-fit text-foreground"><Rocket size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Automation Mindset</h3>
                                <p className="text-muted-foreground">We automate repetitive tasks to reduce error and increase operational efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
