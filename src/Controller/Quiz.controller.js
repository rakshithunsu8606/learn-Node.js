const Quiz = require("../Model/Quiz.model");


const getAllQuiz = async (req, res) => {
    try {
        const QuizzAll = await Quiz.find();

        if (!QuizzAll) {
            return res.status(400).json({ data: null, meassage: "AllQuiz Not added" })
        }

        return res.status(200).json({ data: QuizzAll, meassage: "AllQuiz added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllQuiz" + error.meassage })
    }
}

const getQuiz = async (req, res) => {
    try {
        const Quizz = await Quiz.find()

        console.log(Quizz);

        if (!Quizz) {
            return res.status(400).json({ data: null, message: "Quiz Not get" })
        }

        res.status(200).json({ data: Quizz, message: 'Quiz Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Quiz' })
    }
}

const addQuiz = async (req, res) => {
    try {
        const Quizz = await Quiz.create(req.body)

        console.log("Quizz",Quizz);

        if (!Quizz) {
            return res.status(400).json({ data: null, message: "Quiz Not Difend" })
        }

        res.status(200).json({ data: Quizz, message: 'Quiz Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Quiz' })
    }
}

const deleteQuiz = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const Quizz = await Quiz.findByIdAndDelete(req.params.id)

        console.log(Quizz);

        if (!Quizz) {
            return res.status(400).json({ data: null, message: "Quiz Not Delete" })
        }

        res.status(200).json({ data: Quizz, message: 'Quiz Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Quiz' })
    }
}

const upadateQuiz = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const Quizz = await Quiz.findByIdAndUpdate(
            req.params.id,
            upadte,
            { new: true }
        )

        console.log(Quizz);

        if (!Quizz) {
            return res.status(400).json({ data: null, message: "Quiz Not Upadte" })
        }

        res.status(200).json({ data: Quizz, message: 'Quiz Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Quiz' })
    }
}

module.exports = {
    deleteQuiz,
    upadateQuiz,
    addQuiz,
    getQuiz,
    getAllQuiz
}