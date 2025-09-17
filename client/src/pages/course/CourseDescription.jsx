import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { FaPlay, FaUser, FaBookOpen, FaTags, FaStar, FaCalendarAlt, FaClock } from 'react-icons/fa'

import HomeLayout from '../../layouts/HomeLayout'

function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth)
    
    return (
        <HomeLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full mb-6">
                            <FaBookOpen className="text-yellow-500 mr-2 text-sm" />
                            <span className="text-yellow-400 text-sm font-medium">Course Details</span>
                        </div>
                        <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white mb-4 capitalize leading-tight">
                            {state.title}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Course Media & Info */}
                        <div className="space-y-8">
                            {/* Course Thumbnail */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-3xl blur-3xl"></div>
                                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                                    <img 
                                        src={state.thumbnail?.secure_url} 
                                        alt="Course thumbnail" 
                                        className="w-full h-80 object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <FaPlay className="text-black text-2xl ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Course Stats Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
                                    <FaUser className="text-yellow-500 text-2xl mx-auto mb-2" />
                                    <p className="text-gray-400 text-sm">Instructor</p>
                                    <p className="text-white font-bold capitalize">{state.createdBy}</p>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
                                    <FaBookOpen className="text-yellow-500 text-2xl mx-auto mb-2" />
                                    <p className="text-gray-400 text-sm">Lectures</p>
                                    <p className="text-white font-bold">{state.numberOfLectures}</p>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
                                    <FaTags className="text-yellow-500 text-2xl mx-auto mb-2" />
                                    <p className="text-gray-400 text-sm">Category</p>
                                    <p className="text-white font-bold capitalize">{state.category}</p>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
                                    <FaStar className="text-yellow-500 text-2xl mx-auto mb-2" />
                                    <p className="text-gray-400 text-sm">Rating</p>
                                    <p className="text-white font-bold">4.8★</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Course Description & CTA */}
                        <div className="space-y-8">
                            {/* Course Description Card */}
                            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Course Description</h2>
                                <p className="text-gray-300 lg:text-lg leading-relaxed mb-6">
                                    {state.description}
                                </p>
                                
                                {/* What you'll learn */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">What you'll learn:</h3>
                                    <ul className="space-y-2">
                                        {/*
                                            "Master the fundamentals and advanced concepts",
                                            "Build real-world projects from scratch",
                                            "Get industry-ready skills and knowledge",
                                            "Access to exclusive resources and materials"
                                        */}
                                        {["Master the fundamentals and advanced concepts", "Build real-world projects from scratch", "Get industry-ready skills and knowledge", "Access to exclusive resources and materials"].map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Course Features */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <FaCalendarAlt className="text-yellow-500" />
                                        <span>Lifetime Access</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <FaClock className="text-yellow-500" />
                                        <span>Self-Paced</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing & CTA Card */}
                            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                                <div className="text-center mb-6">
                                    <p className="text-gray-400 text-lg mb-2">Get unlimited access to</p>
                                    <p className="text-yellow-500 text-3xl font-bold">All Courses</p>
                                    <p className="text-gray-300">for just ₹499/year</p>
                                </div>

                                {role === 'ADMIN' || data?.subscription?.status === 'active' ? (
                                    <button 
                                        className="w-full py-4 px-6 text-lg font-semibold bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-green-500/30 flex items-center justify-center gap-3"
                                        onClick={() => navigate(`/course/${state.title}/${state._id}/lectures`, { state: state })}
                                    >
                                        <FaPlay className="text-sm" />
                                        Start Learning Now
                                    </button>
                                ) : (
                                    <button 
                                        className="w-full py-4 px-6 text-lg font-semibold bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl transition-all duration-300 shadow-xl hover:shadow-yellow-500/30 flex items-center justify-center gap-3"
                                        onClick={() => navigate(`/course/${state.title}/checkout`, { state: state })}
                                    >
                                        <FaBookOpen className="text-sm" />
                                        Subscribe Now
                                    </button>
                                )}

                                <p className="text-center text-gray-400 text-sm mt-4">
                                    30-day money-back guarantee
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default CourseDescription
