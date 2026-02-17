"use client";

import { forwardRef } from "react";

interface ProjectsProps {
    isVisible: boolean;
}

const PROJECTS_DATA = [
    {
        title: "Parts-Soft Company Website",
        description: "Parts-Soft is a company that sells auto parts. I designed and developed a website for the company to showcase their products and services.",
        link: "https://parts-soft.nl/",
        linkLabel: "Check Out",
        gradient: "bg-linear-160"
    },
    {
        title: "My Website",
        description: "I designed and developed this website to show my skills and projects. You can find the source code on GitHub.",
        link: "https://github.com/beratozlu42",
        linkLabel: "Check Out",
        gradient: "bg-linear-320"
    },
    {
        title: "My GitHub",
        description: "Check out my GitHub for more projects and code.",
        link: "https://github.com/beratozlu42",
        linkLabel: "GitHub",
        gradient: "bg-linear-160"
    }
];

const Projects = forwardRef<HTMLElement, ProjectsProps>(({ isVisible }, ref) => {

    return (
        <section
            ref={ref}
            className={`experience mt-[10vh] my-10 space-y-8 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 " : "opacity-0"
                }`}
        >
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 gap-6">
                {PROJECTS_DATA.map((project, index) => (
                    <div key={index} className={`${project.gradient} from-black to-gray-800 text-sm px-8 py-10 min-h-[250px] flex flex-col justify-center gap-4 transition-all duration-300 rounded-2xl group`}>
                        <span className="text-2xl font-bold text-gray-100">{project.title}</span>
                        <p className="text-gray-400 leading-relaxed">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 px-8 py-3 bg-gray-400/10 text-gray-200 border border-gray-400/20 rounded-full w-fit text-sm font-bold hover:bg-gray-300 hover:text-black hover:border-gray-400 transition-all duration-300 shadow-xl text-center"
                        >
                            {project.linkLabel}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
});

Projects.displayName = "Projects";

export default Projects;
