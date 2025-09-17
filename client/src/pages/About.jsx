import { FaGraduationCap, FaUsers, FaAward, FaGlobeAmericas } from 'react-icons/fa'
import aboutMainImage from '../assets/Images/aboutMainImage.png'
import option2 from '../assets/json/option2.json'
import Carousel from '../components/Carousel'
import Particle from '../components/Particle'
import HomeLayout from '../layouts/HomeLayout'

function About() {
    return (
        <HomeLayout>
            <div className="relative">
                <Particle option={option2} className="absolute inset-0 opacity-20" />
                <div className="relative z-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
                    
                    {/* Header Section */}
                    <div className="text-center mb-16 px-6">
                        <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full mb-6">
                            <FaGraduationCap className="text-yellow-500 mr-2 text-sm" />
                            <span className="text-yellow-400 text-sm font-medium">About Our Mission</span>
                        </div>
                        <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl text-white mb-4 leading-tight">
                            Empowering <span className="text-yellow-500">Global Education</span>
                        </h1>
                        <p className="text-gray-300 lg:text-xl text-lg max-w-3xl mx-auto leading-relaxed">
                            We're dedicated to making quality education accessible to everyone, everywhere.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-6">
                        {/* Main Content Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            {/* Text Content */}
                            <div className="space-y-8">
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                                    <h2 className="text-3xl font-bold text-yellow-500 mb-6">Our Vision</h2>
                                    <p className="text-gray-300 lg:text-xl text-lg leading-relaxed mb-6">
                                        Our goal is to provide affordable and quality education to the world. We are creating a platform 
                                        for aspiring teachers and students to share their skills, creativity and knowledge with each other.
                                    </p>
                                    <p className="text-gray-300 lg:text-lg leading-relaxed">
                                        We believe in empowering individuals and contributing to the growth and wellness of mankind through 
                                        accessible, high-quality online education.
                                    </p>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <FaUsers />, number: "15K+", label: "Active Learners" },
                                        { icon: <FaGraduationCap />, number: "500+", label: "Courses" },
                                        { icon: <FaAward />, number: "50+", label: "Expert Instructors" },
                                        { icon: <FaGlobeAmericas />, number: "25+", label: "Countries" }
                                    ].map((stat, index) => (
                                        <div key={index} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
                                            <div className="text-yellow-500 text-3xl mb-2 flex justify-center">{stat.icon}</div>
                                            <p className="text-white font-bold text-2xl">{stat.number}</p>
                                            <p className="text-gray-400 text-sm">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex justify-center items-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-3xl blur-3xl"></div>
                                    <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                                        <img 
                                            src={aboutMainImage} 
                                            alt="About our education platform" 
                                            className="w-full h-auto object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Values Section */}
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                                <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Accessibility",
                                        description: "Making quality education accessible to learners worldwide, regardless of location or background.",
                                        icon: "🌍"
                                    },
                                    {
                                        title: "Excellence",
                                        description: "Delivering high-quality content created by industry experts and experienced educators.",
                                        icon: "⭐"
                                    },
                                    {
                                        title: "Innovation",
                                        description: "Continuously improving our platform with cutting-edge technology and teaching methods.",
                                        icon: "🚀"
                                    }
                                ].map((value, index) => (
                                    <div key={index} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-yellow-500/30 transition-all duration-300">
                                        <div className="text-4xl mb-4">{value.icon}</div>
                                        <h3 className="text-xl font-bold text-yellow-500 mb-4">{value.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials Section */}
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-4">What Our Partners Say</h2>
                                <p className="text-gray-400">Real experiences from our learning community</p>
                            </div>
                            <div className="max-w-4xl mx-auto">
                                <Carousel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default About
