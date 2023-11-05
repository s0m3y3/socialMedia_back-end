const Thought = require('../models/Thought');

module.exports = {
    async getSingleThoughts (req, res) {
        try {
            const thought = await Thought.findById(req.params.ThoughtID);
            if (!thought) { return res.status(404).json({ message: 'Thought not found' });}
            res.status(200).json(thought);
        } 
            catch (error) {res.status(500).json({ message: 'Internal server error' });}
    },

    async getThoughts (req, res) {

    },

    async createThoughts (req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
          } catch (err) {
            res.status(500).json(err);
          }
        },

    async updateThoughts (req, res) {

    },

    async deleteThoughts (req, res) {

    },

};