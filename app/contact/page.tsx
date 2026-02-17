"use client";

import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                const data = await response.json();
                setErrorMessage(data.message || "Something went wrong.");
                setStatus("error");
            }
        } catch (error) {
            setErrorMessage("Failed to send message. Please try again later.");
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-[600px] mx-auto px-5 md:px-0 py-20 flex-col justify-center animate-fade-in">
            <div className="space-y-4 mb-10 text-center md:text-left">
                <h1 className="text-4xl font-bold">
                    Get in Touch
                </h1>
                <p className="text-gray-400 text-lg">
                    Please fill out the form below to get in touch with me.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

                {status === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-center text-sm">
                        Message sent successfully! I'll get back to you soon.
                    </div>
                )}

                {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-center text-sm">
                        {errorMessage}
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 pl-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-gray-900/50 border border-gray-800 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/10 rounded-2xl px-6 py-4 text-gray-100 transition-all duration-300 outline-none placeholder:text-gray-600"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 pl-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-gray-900/50 border border-gray-800 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/10 rounded-2xl px-6 py-4 text-gray-100 transition-all duration-300 outline-none placeholder:text-gray-600"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 pl-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Please write your message here..."
                        className="w-full bg-gray-900/50 border border-gray-800 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/10 rounded-2xl px-6 py-4 text-gray-100 transition-all duration-300 outline-none placeholder:text-gray-600 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-linear-160 from-black via-gray-900 text-gray-100 border border-gray-700/50 hover:border-gray-500 rounded-2xl py-4 font-bold transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === "loading" ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            "Send Message"
                        )}
                    </span>
                </button>
            </form>
        </div>
    );
};

export default Contact;

