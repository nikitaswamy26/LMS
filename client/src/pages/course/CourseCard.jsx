import { useNavigate } from 'react-router-dom'
import { FaPlay, FaUser, FaBookOpen, FaStar } from 'react-icons/fa'

function CourseCard({ data }) {
    const navigate = useNavigate()
    
    return (
        <div 
            onClick={() => navigate('/course/description', { state: { ...data } })} 
            className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:transform hover:scale-105 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20"
        >
            {/* Thumbnail */}
            <div className="relative overflow-hidden">
                <img 
                    src={data.thumbnail?.secure_url} 
                    alt="course thumbnail" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <FaPlay className="text-black text-xl ml-1" />
                    </div>
                </div>

                {/* NEW Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                    {data.title}
                </h3>

                {/* Course Info */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaUser className="text-yellow-500" />
                        <span className="capitalize">{data.createdBy}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaBookOpen className="text-yellow-500" />
                        <span>{data.numberOfLectures} lectures</span>
                    </div>

                    
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                    <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30 capitalize">
                        {data.category}
                    </span>
                    
                    {/* Price (you can add this if you have pricing data) */}
                    <div className="text-right">
                        <p className="text-green-400 font-bold">Free</p>
                    </div>
                </div>

                
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-500/5 to-transparent pointer-events-none"></div>
        </div>
    )
}

export default CourseCard
