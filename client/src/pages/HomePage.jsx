import { Link } from "react-router-dom"
import { FaPlay, FaStar, FaUsers, FaGraduationCap } from 'react-icons/fa'
import HomeImage from "../assets/Images/homeImage.png"
import option1 from '../assets/json/option1.json'
import Particle from "../components/Particle"
import HomeLayout from "../layouts/HomeLayout"

const HomePage = () => {
    return (
        <HomeLayout>
            <div className="relative min-h-screen py-10">
                <Particle option={option1} className="absolute inset-0 opacity-20" />
                <div className="relative z-10 flex lg:px-12 px-6 pb-8 lg:pb-0 flex-col lg:flex-row justify-center items-center min-h-screen">
                    <div className="lg:px-4 md:px-4 space-y-8 lg:w-1/2 max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full">
                            <FaStar className="text-yellow-500 mr-2 text-sm" />
                            <span className="text-yellow-400 text-sm font-medium">Premium Online Education Platform</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="lg:text-7xl text-4xl text-white font-bold leading-tight">
                            Master New Skills with 
                            <span className="text-yellow-500 block lg:inline"> Expert-Led Courses</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-300 lg:text-xl text-lg leading-relaxed">
                            Join thousands of learners advancing their careers through our comprehensive, 
                            industry-relevant courses designed by professionals.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 py-4">
                            <div className="flex items-center gap-2">
                                <FaUsers className="text-yellow-500 text-xl" />
                                <div>
                                    <p className="text-white font-bold text-lg">15,000+</p>
                                    <p className="text-gray-400 text-sm">Active Students</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGraduationCap className="text-yellow-500 text-xl" />
                                <div>
                                    <p className="text-white font-bold text-lg">500+</p>
                                    <p className="text-gray-400 text-sm">Expert Courses</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaStar className="text-yellow-500 text-xl" />
                                <div>
                                    <p className="text-white font-bold text-lg">4.8/5</p>
                                    <p className="text-gray-400 text-sm">Student Rating</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-6 lg:flex-row md:flex-row flex-col items-center pt-4">
                            <Link to={'/courses'} className="w-full lg:w-fit">
                                <button className="w-full lg:w-52 py-4 px-6 lg:text-lg font-semibold bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl transition-all duration-300 shadow-xl hover:shadow-yellow-500/30 flex items-center justify-center gap-3">
                                    <FaPlay className="text-sm" />
                                    Start Learning 
                                </button>
                            </Link>
                            <Link to={'/contact'} className="w-full lg:w-fit">
                            
                {/*
                                <button className="w-full lg:w-52 py-4 px-6 lg:text-lg font-semibold bg-transparent text-white border-2 border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/10 backdrop-blur-sm rounded-xl transition-all duration-300">
                                    Get Free Demo
                                </button>  

                                */}
                                
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-4 pt-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-3 border-gray-800 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-xs">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm">Join <span className="text-yellow-400 font-bold">15,000+</span> successful learners</p>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <FaStar key={i} className="text-yellow-400 text-xs" />
                                    ))}
                                    <span className="text-gray-400 text-xs ml-1">4.9 out of 5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-transparent rounded-3xl blur-3xl"></div>
                        <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                            <img 
                                src={HomeImage} 
                                alt="Online Learning Platform" 
                                className="w-full h-auto object-contain drop-shadow-2xl" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default HomePage
