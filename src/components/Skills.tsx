import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Zap, Shield, Globe, Award, Headphones, Compass, LayoutGrid } from 'lucide-react';

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const skills = [
        {
            icon: <Compass className="w-10 h-10" />,
            title: 'Precision Planning',
            description: 'Advanced algorithms optimize every route for fuel efficiency and on-time arrival.',
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: 'Rapid Deployment',
            description: 'Our fleet is positioned globally, ready for takeoff within 4 hours of your request.',
        },
        {
            icon: <Shield className="w-10 h-10" />,
            title: 'Rigorous Safety',
            description: 'Exceeding all international aviation standards with proactive maintenance.',
        },
        {
            icon: <Globe className="w-10 h-10" />,
            title: 'Global Range',
            description: 'Direct connections to over 5,000 airports worldwide, bypassing major hubs.',
        },
        {
            icon: <Award className="w-10 h-10" />,
            title: 'Bespoke Comfort',
            description: 'Every cabin is curated with your preferred amenities and tailored catering.',
        },
        {
            icon: <Headphones className="w-10 h-10" />,
            title: 'Expert Support',
            description: 'A dedicated concierge team monitors your journey from inception to completion.',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate('.skill-card', {
                            translateY: [60, 0],
                            opacity: [0, 1],
                            delay: stagger(150),
                            ease: 'outExpo',
                            duration: 1400,
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="benefits"
            className="py-32 bg-white"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-gray-400 tracking-[0.2em] mb-6 uppercase">
                            Operational Capabilities
                        </p>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal leading-none tracking-tighter" style={{ color: '#202A36' }}>
                            Engineered for Excellence.
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <LayoutGrid className="w-12 h-12 text-gray-100 hidden lg:block" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card opacity-0 group"
                        >
                            <div className="mb-8 overflow-hidden inline-block transition-transform duration-500 group-hover:scale-110" style={{ color: '#202A36' }}>
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-normal mb-4 tracking-tight" style={{ color: '#202A36' }}>
                                {skill.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-light text-lg">
                                {skill.description}
                            </p>
                            <div className="mt-8 h-px w-0 bg-gray-200 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
