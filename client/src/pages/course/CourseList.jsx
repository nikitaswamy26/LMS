import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaGraduationCap, FaBookOpen } from 'react-icons/fa'

import HomeLayout from '../../layouts/HomeLayout'
import { getAllCourse } from '../../redux/slices/CourseSlice'
import CourseCard from './CourseCard';

function CourseList() {
    const dispatch = useDispatch();

    const { courseData } = useSelector((state) => state?.course)

    async function loadCourses() {
        await dispatch(getAllCourse())
    }
    useEffect(() => {
        loadCourses()
    }, [])

    return (
        <HomeLayout>
            <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16'>
                {/* Header Section */}
                <div className='text-center mb-16 px-6'>
                    <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full mb-6">
                        <FaGraduationCap className="text-yellow-500 mr-2 text-sm" />
                        <span className="text-yellow-400 text-sm font-medium">Professional Development</span>
                    </div>
                    
                    <h1 className='font-bold lg:text-6xl md:text-5xl text-3xl text-white mb-4 leading-tight'>
                        Explore Premium <span className='text-yellow-500'>Courses</span>
                    </h1>
                    <p className='text-gray-300 lg:text-xl text-lg max-w-3xl mx-auto leading-relaxed'>
                        Master in-demand skills with courses crafted by industry experts and trusted by thousands of professionals worldwide.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mt-8 flex-wrap">
                        <div className="text-center">
                            <p className="text-yellow-500 font-bold text-2xl">{courseData?.length || 0}+</p>
                            <p className="text-gray-400 text-sm">Expert Courses</p>
                        </div>
                        <div className="text-center">
                            <p className="text-yellow-500 font-bold text-2xl">50K+</p>
                            <p className="text-gray-400 text-sm">Students Enrolled</p>
                        </div>
                        <div className="text-center">
                            <p className="text-yellow-500 font-bold text-2xl">4.9★</p>
                            <p className="text-gray-400 text-sm">Average Rating</p>
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className='max-w-7xl mx-auto px-6'>
                    {courseData?.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                            {courseData.map((course) => (
                                <CourseCard key={course._id} data={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <FaBookOpen className="text-6xl text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 text-xl">No courses available at the moment</p>
                        </div>
                    )}
                </div>
            </div>
        </HomeLayout>
    )
}

export default CourseList
