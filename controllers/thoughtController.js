const Thought = require('../models/Thought');

module.exports = {
    async getSingleThoughts (req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtID);
            if (!thought) { return res.status(404).json({ message: 'Thought not found' });}
            res.status(200).json(thought);
        } 
            catch (error) {res.status(500).json({ message: 'Internal server error' });}
    },

    async getThoughts (req, res) {
        try {
            const allThoughts = await Thought.find();
            if (!allThoughts) { return res.status(404).json({ message: 'Thought not found' });}
            res.status(200).json(allThoughts);
        } 
            catch (error) {res.status(500).json({ message: 'Internal server error' });}
    },

    async createThoughts (req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            res.json(thoughtData);
          } catch (err) {
            res.status(500).json(err);
          }
        },

    async updateThoughts (req, res) {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedThought);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    //need fixing
    async deleteThoughts (req, res) {
        try {
            await Thought.findByIdAndDelete(req.params.thoughtID);
            res.json({ message: 'Thought deleted successfully' });
          } catch (err) {
            res.status(500).json(err);
          }
    },

};