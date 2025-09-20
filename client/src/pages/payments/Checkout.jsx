import { useEffect } from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaCrown, FaCheckCircle, FaInfinity, FaClock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import HomeLayout from '../../layouts/HomeLayout'
import { getRazorpayKey, purchaseCourseBundle, verifyUserPayment } from '../../redux/slices/RazorpaySlice';

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const razorpay = useSelector((state) => state.razorpay);
    const userdata = useSelector((state) => state.auth?.data);
    const paymentDetails = {
        payment_id: "",
        subscription_id: "",
        razorpay_signature: ""
    }

    async function handleSubscription() {
        if (!razorpay.key || !razorpay.subscription_id) {
            toast.error("Something went wrong! Please try again later")
            return;
        }
        const options = {
            key: razorpay.key,
            subscription_id: razorpay.subscription_id,
            name: "LMS Project",
            description: "Yearly Subscription",
            theme: {
                color: "#eab308"
            },
            prefill: {
                email: userdata.email,
                name: userdata.name
            },
            handler: async function (response) {
                console.log("Response: ", response);
                
                paymentDetails.payment_id = response.razorpay_payment_id
                paymentDetails.subscription_id = response.razorpay_subscription_id
                paymentDetails.razorpay_signature = response.razorpay_signature
                const res = await dispatch(verifyUserPayment(paymentDetails));
                if (res?.payload?.success) {
                    navigate(`/course/${state?.title}/checkout/success`, { state: state });
                } else {
                    navigate(`/course/${state?.title}/checkout/fail`, { state: state });
                }
            }
        }
        const paymentObj = new window.Razorpay(options)
        paymentObj.open()
    }

    async function onLoad() {
        await dispatch(getRazorpayKey());
        await dispatch(purchaseCourseBundle())
    }

    useEffect(() => {
        if (!state) {
            navigate("/courses")
        } else {
            document.title = 'Checkout - Learning Management System'
            onLoad()
        }
    }, [])

    return (
        <HomeLayout>
            <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center py-12 px-6'>
                <div className='max-w-md w-full'>
                    {/* Premium Badge */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full mb-4">
                            <FaCrown className="text-yellow-500 mr-2 text-sm" />
                            <span className="text-yellow-400 text-sm font-medium">Premium Subscription</span>
                        </div>
                    </div>

                    {/* Main Card */}
                    <div className='bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl'>
                        {/* Header */}
                        <div className='bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-2xl text-center py-6'>
                            <FaCrown className="inline-block mr-2 text-3xl" />
                            All Access Pass
                        </div>

                        <div className='p-8 space-y-6'>
                            {/* Main Description */}
                            <div className="text-center space-y-4">
                                <h2 className="text-white text-xl font-semibold">Unlock Your Learning Potential</h2>
                                <p className='text-gray-300 leading-relaxed'>
                                    Get unlimited access to our entire course library with expert-led content, 
                                    designed to accelerate your career growth.
                                </p>
                            </div>

                            {/* Features */}
                            

                            {/* Pricing */}
                            <div className="text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-500/30">
                                <p className="text-gray-400 text-sm mb-2">Special Launch Price</p>
                                <div className='flex items-center justify-center text-green-400 mb-2'>
                                    <BsCurrencyRupee className="text-2xl" />
                                    <span className='text-4xl font-bold'>499</span>
                                    <span className="text-lg ml-2">only</span>
                                </div>
                               
                            </div>

                            {/* CTA Button */}
                            <button 
                                className='w-full py-4 px-6 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black rounded-xl transition-all duration-300 shadow-xl hover:shadow-yellow-500/30 flex items-center justify-center gap-3'
                                onClick={handleSubscription}
                            >
                                <FaCrown className="text-lg" />
                                Subscribe Now
                            </button>

                            {/* Trust Indicators */}
                            <div className="text-center space-y-2 pt-4">
                                <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
                                    <span>Secure Payment via Razorpay</span>
                                </div>
                                <p className='text-gray-400 text-sm'>
                                    Join 15,000+ learners who transformed their careers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Trust Badge */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400 text-xs">
                            🔒 Your payment information is secure and encrypted
                        </p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Checkout
