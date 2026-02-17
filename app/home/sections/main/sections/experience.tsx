"use client";

import { forwardRef } from "react";

const Skills = ["React", "UI/UX Design", "TypeScript", "Tailwind CSS", "Node.js", "C#", "SQL", "CSS", "Next.js"];
const ExperienceText = "I enjoy developing digital products where attention to detail truly matters. Working on full-stack projects has helped me understand both frontend architecture and backend integration, allowing me to build complete and reliable solutions.";

interface ExperienceProps {
    isVisible: boolean;
}

const Experience = forwardRef<HTMLElement, ExperienceProps>(({ isVisible }, ref) => {
    return (
        <section
            ref={ref}
            className={`experience mt-[10vh] space-y-3 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
        >
            <h2 className="text-2xl font-bold">My Experience</h2>
            <span className="text-md md:text-lg text-gray-400">{ExperienceText}</span>

            <div className="flex flex-wrap gap-2 items-center justify-center mt-8">
                {Skills.map((skill) => (
                    <div key={skill} className="bg-gray-800 text-sm px-6 py-2 flex items-center transition-all duration-300 hover:shadow-gray-700 shadow-lg justify-center rounded-full border border-gray-700/50 hover:border-gray-600">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
});

Experience.displayName = "Experience";

export default Experience;
