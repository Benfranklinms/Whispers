import Confession from '../models/Confessions.js';

export const createConfession = async (req, res) => {
    try {
        const { text } = req.body;
        if(!text){
            return res.status(400).json({message: "Confession text is required"});
        }
        const newConfession = new Confession({
            text,
            user: req.user.id
        });
        const saved = await newConfession.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getAllConfessions = async (req, res) => {
    try{
        const Confessions = await Confession.find().sort({createdAt: -1})
        res.status(200).json(Confessions);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

export const getMyConfessions = async (req, res) => {
    try{
        const myConfessions = await Confession.find({user: req.user.id}).sort({createdAt: -1});
        res.status(200).json(myConfessions);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}