const mongoose = require('mongoose')

const NotesShema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Note", NotesShema)