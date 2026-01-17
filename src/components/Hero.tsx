/// <reference types="@react-three/fiber" />
import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleNetwork = (props: any) => {
    const ref = useRef<any>(null);
    // Generate 5000 random points in a sphere
    const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }), []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        // @ts-ignore
        <group rotation={[0, 0, Math.PI / 4] as [number, number, number]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#000000" // Black nodes for white theme
                    size={0.003}     // Small, subtle size
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
            {/* @ts-ignore */}
        </group>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">

            {/* React Three Fiber Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleNetwork />
                </Canvas>
                {/* Soft gradient overlay to fade edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pointer-events-none">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/80 backdrop-blur-md mb-8 pointer-events-auto shadow-sm"
                >
                    <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Enterprise Grade Engineering</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1] drop-shadow-sm"
                >
                    Building Scalable <br className="hidden md:block" />
                    <span className="text-muted-foreground">Automated Systems.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Paimon Tech Solutions architects high-performance web applications and backend infrastructures for startups and enterprises.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
                >
                    <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg">
                        Start a Project <ArrowRight size={18} />
                    </a>
                    <a href="#work" className="px-8 py-4 bg-white/50 border border-border text-foreground font-medium rounded-lg hover:bg-white/80 transition-colors flex items-center gap-2 backdrop-blur-sm">
                        View Work <ChevronRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
