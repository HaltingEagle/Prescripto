import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async()  => {
    cloudinary.config({
        cloud_details : process.env.CLOUDINARY_URL,
    })
}

export default connectCloudinary