import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkId:{
        type: String,
        require: true,
        unique: true,
    },
    firstName:{
        type:String,
        require: trusted,
    },
    lastName:{
        type:String,
        require: trusted,
    },
    userName:{
        type:String,
        require: trusted,
    },
    email:{
        type:String,
        require: trusted,
    },
    profilePhoto:{
        type: String,
        require: true,
    },
    posts:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
        default:[],

    },
    savePosts:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
        default:[],

    },
    lovePosts:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
        default:[],

    },
    followers:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        default:[],

    },
    following:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        default:[],

    },
    createAt: {
        type: Date,
        default: Date.now,
    }

});

const User= mongoose.models.User || mongoose.model("User", UserSchema);

export default User;