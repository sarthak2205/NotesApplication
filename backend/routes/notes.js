const router = require('express').Router()
const Note = require('../models/notes')


//creating a Note
router.post("/", async (req, res) => {
    const newNote = new Note(req.body)
    try {
        const savedNote = await newNote.save()
        res.status(200).json(savedNote)
    } catch(error) {
        res.status(400).json(error)
    }
})

//Updating a Note
router.put("/:id", async (req, res) => {
    try {
        const updateNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true
            }
        )
        res.status(200).json(updateNote)
    } catch (error) {
        res.status(401).json({error: "Error in updating the post"})
    }
})


//Deleting a Note
router.delete("/:id", async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        try{
            await note.deleteOne()
            res.status(200).json("Note has been deleted")
        } catch(error) {
            res.status(400).json('Error in deleting the Note')
        }
    } catch(error) {
        res.status(500).json(error)
    }
})


//Get a specific Note
router.get("/:id", async (req, res) => {
    try{
        const note = await Note.findById(req.params.id)
        if(note) {
            res.status(200).json(note)
        } else {
            req.status(404).json({error: "Note not found!"})
        }
    } catch(error) {
        res.status(404).json(error)
    }
})


//Get all the notes
router.get("/", async (req, res) => {
    try {
        let notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        res.status(404).json({error: "Error in getting all the notes"})
    }
})

module.exports = router