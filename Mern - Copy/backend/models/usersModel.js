import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    
    userName: {
        type: String,
        required: true,
        unique:true
    },
    
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        defualt: false
    },
    isSuperAdmin: {
        type: Boolean,
        required: true,
        defualt: false
    },
}, {
    timestamps: true
})

const User = mongoose.model('Testers', userSchema)

export default User