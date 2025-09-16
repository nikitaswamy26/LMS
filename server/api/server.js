import app from "../app.js";
import { connectDb } from '../database/db.js'
import { v2 as cloudinary } from 'cloudinary';
import Razorpay from 'razorpay'
import serverless from 'serverless-http'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})

if(process.env.NODE_ENV !== 'production'){
    app.listen(process.env.PORT, () => {
    connectDb()
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})
}else{
    await connectDb()
}

app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})
// Export serverless handler for Vercel
export default serverless(app)