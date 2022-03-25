import { createContext, useContext, useMemo, useState, useEffect } from "react";

const QuestionContext = createContext();

export default function QuestionWrapper({ children }) {
    const [questions, setQuestions] = useState([]);
    const [formations, setFormations] = useState([]);
    const [questionCounter, setQuestionCounter] = useState(0);

    useEffect(() => {
        fetchJson("./simulation.json").then((data) => {
            setQuestions(data.questions);
            setFormations(data.formations);
        });
    }, []);

    const nextQuestion = (id, valid) => {
        setQuestionCounter(questionCounter + 1);
        if (questionCounter > questions.length - 1) return;
        if (!valid) return;

        const question = questions.find((question) => question.question_id === id);
        const newFormations = formations.filter((formation) => question.formations.includes(formation.formation_id));
        setFormations(newFormations);
    };

    const value = useMemo(() => {
        return { questions, formations, nextQuestion, questionCounter };
    }, [questions, formations]);

    return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
}

export function useQuestionContext() {
    return useContext(QuestionContext);
}

const fetchJson = async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
};