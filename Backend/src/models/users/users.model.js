const { Schema, model, models } =  require("mongoose")




const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    // age: {
    //     type: Number,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // class: {
    //     type: String,
    // },
    // role: {
    //     type: String,
    //     enum: ["Admin", "Lecturer", "Student"],
    //     default: "Student",
    // }
})

const UserModel =  model("user", UserSchema)
// console.log(UserModel);


module.exports = UserModel;