import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center py-10">
            <div className="flex flex-row gap-3">
                <a href="https://github.com/beratozlu42" target="_blank" className="text-sm flex flex-row items-center gap-2 hover:text-red-200 transition-colors duration-300 w-fit"><FaGithub size={20} className="text-red-200" /></a>
                <a href="https://www.linkedin.com/in/berat-ozlu-0089542b3/" target="_blank" className="text-sm flex flex-row items-center gap-2 hover:text-red-200 transition-colors duration-300 w-fit"><FaLinkedin size={20} className="text-red-200" /></a>
            </div>
            <p className="text-sm text-gray-400 mt-8">© 2026 Berat OZLU. All rights reserved.</p>
        </footer>
    )
}

export default Footer
