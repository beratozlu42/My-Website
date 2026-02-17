"use client";

import { useEffect, useRef, useState } from "react";
import Intro from "./sections/intro";
import Experience from "./sections/experience";
import TechnicalSkills from "./sections/technical-skills";
import Projects from "./sections/projects";

const Main = () => {
    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [isSkillsVisible, setIsSkillsVisible] = useState(false);
    const [isProjectVisible, setIsProjectVisible] = useState(false);

    const experienceRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLElement>(null);
    const projectRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === experienceRef.current) {
                            setIsExperienceVisible(true);
                            observer.unobserve(entry.target);
                        }
                        if (entry.target === skillsRef.current) {
                            setIsSkillsVisible(true);
                            observer.unobserve(entry.target);
                        }
                        if (entry.target === projectRef.current) {
                            setIsProjectVisible(true);
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -20% 0px"
            }
        );

        if (experienceRef.current) observer.observe(experienceRef.current);
        if (skillsRef.current) observer.observe(skillsRef.current);
        if (projectRef.current) observer.observe(projectRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Intro />
            <Experience ref={experienceRef} isVisible={isExperienceVisible} />
            <TechnicalSkills ref={skillsRef} isVisible={isSkillsVisible} />
            <Projects ref={projectRef} isVisible={isProjectVisible} />
        </>
    );
};

export default Main;