import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Footer() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return (
        <>
            <footer className="bg-gray-900 text-white py-8 lg:px-20 px-8 w-full border-t border-gray-800">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    {/* Logo and copyright section */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-xl font-bold mb-2">LMS <span className="text-yellow-500">Platform</span></h2>
                        <p className="text-gray-400 text-sm">Copyright @{currentYear} All rights reserved</p>
                    </div>

                    {/* Quick links section */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-lg font-semibold mb-3 text-yellow-500">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="text-gray-300 hover:text-yellow-500 transition-all duration-300">Home</Link>
                            <Link to="/courses" className="text-gray-300 hover:text-yellow-500 transition-all duration-300">Courses</Link>
                            <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition-all duration-300">Contact</Link>
                        </div>
                    </div>

                    {/* Social links section */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-lg font-semibold mb-3 text-yellow-500">Connect With Us</h3>
                        <div className="flex items-center gap-5 text-2xl">
                            <Link to="https://github.com/MayankChandratre1" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-all duration-300">
                                <BsGithub />
                            </Link>
                            <Link to="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-all duration-300">
                                <BsLinkedin />
                            </Link>
                            <Link to="https://twitter.com" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-all duration-300">
                                <BsTwitter />
                            </Link>
                            <Link to="https://facebook.com" target="_blank" className="text-gray-300 hover:text-yellow-500 transition-all duration-300">
                                <BsFacebook />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer