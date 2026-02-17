"use client";

const Intro = () => {
    return (
        <section className="my-10 animate-fade-in [animation-delay:1s] opacity-0">
            <div className="my-10">
                <p className="text-md md:text-lg text-gray-400">
                    I’m passionate about crafting <span className="text-red-200">modern web applications</span> where every pixel has a purpose.
                    With a strong attention to <span className="text-purple-300">detail</span> and <span className="text-orange-200">responsiveness</span>, I build digital products that feel smooth, fast, and reliable.
                </p>
            </div>
            <span className="text-sm text-gray-400 flex justify-center">Scroll down to see more.</span>
        </section>
    );
};

export default Intro;
