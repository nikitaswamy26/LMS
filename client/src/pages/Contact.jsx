import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

import option2 from '../assets/json/option2.json'
import Particle from '../components/Particle'
import axiosInstance from '../helpers/AxiosInstance';
import HomeLayout from '../layouts/HomeLayout'

function Contact() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleUserInput(e) {
        const { name, value } = e.target
        setUserInput({ ...userInput, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let hasError = false;

        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("All input fields are required");
            hasError = true;
        } else if (!userInput.email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
            toast.error('Please enter a valid email');
            hasError = true;
        }

        if (!hasError) {
            try {
                toast.loading("Sending your message...", {
                    position: 'top-center'
                })
                const response = await axiosInstance.post('/contactus', userInput);
                console.log(response);
                toast.dismiss();
                if (response.data?.success) {
                    toast.success(response.data.message)
                    setUserInput({
                        name: "",
                        email: "",
                        message: ""
                    })
                }
            } catch (error) {
                console.log(error);
                toast.dismiss();
                toast.error(error.response?.statusText || error.message)
                setUserInput({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        }
    }

    return (
        <HomeLayout>
            <div className="relative">
                <Particle option={option2} className="absolute inset-0 opacity-20" />
                <div className="relative z-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center py-16 px-6">
                    <div className="max-w-6xl mx-auto w-full">
                        
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full mb-6">
                                <FaEnvelope className="text-yellow-500 mr-2 text-sm" />
                                <span className="text-yellow-400 text-sm font-medium">Get In Touch</span>
                            </div>
                            <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white mb-4 leading-tight">
                                Contact <span className="text-yellow-500">Our Team</span>
                            </h1>
                            <p className="text-gray-300 lg:text-xl text-lg max-w-2xl mx-auto leading-relaxed">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            
                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                                    <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                                <FaEnvelope className="text-yellow-500" />
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">Email</p>
                                                <p className="text-gray-400">support@learningms.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                                <FaPhone className="text-yellow-500" />
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">Phone</p>
                                                <p className="text-gray-400">+91 98765 43210</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                                <FaMapMarkerAlt className="text-yellow-500" />
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">Location</p>
                                                <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Info */}
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-yellow-500 mb-4">Response Time</h3>
                                    <p className="text-gray-300">Our support team typically responds within 24 hours during business days.</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                                    <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-white font-semibold mb-2">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    name="name"
                                                    id="name"
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                                                    value={userInput.name}
                                                    onChange={handleUserInput}
                                                />
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="email" className="block text-white font-semibold mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    name="email"
                                                    id="email"
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                                                    value={userInput.email}
                                                    onChange={handleUserInput}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="message" className="block text-white font-semibold mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows="6"
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none"
                                                placeholder="Tell us how we can help you..."
                                                value={userInput.message}
                                                onChange={handleUserInput}
                                            />
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className="w-full py-4 px-6 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black rounded-xl transition-all duration-300 shadow-xl hover:shadow-yellow-500/30 flex items-center justify-center gap-3"
                                        >
                                            <FaPaperPlane className="text-sm" />
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Contact
