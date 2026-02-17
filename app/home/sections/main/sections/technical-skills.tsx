"use client";

import { forwardRef } from "react";

const SkillBars = [
    { name: "React", percentage: 90, color: "bg-red-400" },
    { name: "UI/UX Design", percentage: 94, color: "bg-green-400" },
    { name: "TypeScript", percentage: 90, color: "bg-purple-400" },
    { name: "Tailwind CSS", percentage: 93, color: "bg-orange-300" },
    { name: "Node.js", percentage: 82, color: "bg-blue-400" }
];

interface TechnicalSkillsProps {
    isVisible: boolean;
}

const TechnicalSkills = forwardRef<HTMLElement, TechnicalSkillsProps>(({ isVisible }, ref) => {
    return (
        <section
            ref={ref}
            className={`experience mt-[10vh] my-10 space-y-8 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
        >
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="max-w-md mx-auto">
                {SkillBars.map((skill) => (
                    <div key={skill.name} className="group py-3 hover:scale-110 transition-all duration-200">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                            <span className="text-xs font-semibold text-gray-400">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-800/50 rounded-full h-2 border border-gray-700/30 overflow-hidden">
                            <div
                                className={`h-full ${skill.color} rounded-full transition-all duration-1300 ease-out shadow-[0_0_10px_rgba(30,30,30,0.5)]`}
                                style={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

TechnicalSkills.displayName = "TechnicalSkills";

export default TechnicalSkills;
