import { createContext, useContext, useMemo, useState } from "react";

const QuestionContext = createContext();

export default function QuestionWrapper({ children }) {
    const [questions, setQuestions] = useState();
    const [formations, setFormations] = useState();
    const [questionCounter, setQuestionCounter] = useState(0);

    const nextQuestion = (valid) => {
        if (questionCounter > questions.length - 1) return;
        if (valid) {
            const newFormationArray = matchWord(formations, questions[questionCounter].keywords);
            setFormations(newFormationArray);
        }

        setQuestionCounter(questionCounter + 1);
    };

    const value = useMemo(() => {
        return ({ questions, setQuestions, formations, setFormations, nextQuestion })
    }, [questions, formations]);

    return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
}

export function useQuestionContext() {
    return useContext(QuestionContext);
}

const matchWord = (array, keyword) => {
    const newArray = array.map((formation) => {
        let score = formation?.score || 0;
        let regexFromKeyword = new RegExp(keyword.join("|"), "gm");

        const matchTeam = JSON.stringify(formation).match(regexFromKeyword);
        if (matchTeam) score++;

        return { ...formation, score };
    });

    return newArray;
};
