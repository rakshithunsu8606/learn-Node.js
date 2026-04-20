const QuizCon = require("../Model/QuizContent.model");


const getAllQuizContent = async (req, res) => {
    try {
        const QuizzAll = await QuizCon.find();

        if (!QuizzAll) {
            return res.status(400).json({ data: null, meassage: "AllQuiz Not added" })
        }

        return res.status(200).json({ data: QuizzAll, meassage: "AllQuiz added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllQuiz" + error.meassage })
    }
}

const getQuizContent = async (req, res) => {
    try {
        const Quizz = await QuizCon.find()

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

const addQuizContent = async (req, res) => {
    try {
        const Quizz = await QuizCon.create(req.body)

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

const deleteQuizContent = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const Quizz = await QuizCon.findByIdAndDelete(req.params.id)

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

const upadateQuizContent = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const Quizz = await QuizCon.findByIdAndUpdate(
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
    deleteQuizContent,
    upadateQuizContent,
    addQuizContent,
    getAllQuizContent,
    getQuizContent
}