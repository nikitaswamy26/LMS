import path from 'path'
import multer from 'multer'

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        let ext = path.extname(file.originalname)
        

        if (ext !== ".jpg" &&
            ext !== ".png" &&
            ext !== ".webp" &&
            ext !== ".jpeg" &&
            ext !== ".mp4"
        ) {
            cb(new Error(`Unsupported file type! ${ext}`), false)
            return;
        }
        
        cb(null, true)
    }
})

export default upload
