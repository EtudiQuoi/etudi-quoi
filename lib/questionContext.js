import { createContext, useContext, useMemo, useState, useEffect } from "react";

const QuestionContext = createContext();

export default function QuestionWrapper({ children }) {
    const [questions, setQuestions] = useState();
    const [formations, setFormations] = useState();
    const [questionCounter, setQuestionCounter] = useState(0);

    useEffect(async () => {
        const questionsData = await fetchJson("./questions.json");
        const formationsData = await fetchJson("./formation-data.json");
        setQuestions(questionsData.questions);
        setFormations(formationsData.FICHES.FICHE);
    }, []);

    // useEffect(() => console.log(questionCounter), [questionCounter]);

    const fetchJson = async (url) => {
        const response = await fetch(url);
        const json = await response.json();

        return json;
    };

    const nextQuestion = (valid) => {
        setQuestionCounter(questionCounter + 1);
        if (questionCounter > questions.length - 1) return;
        if (valid) {
            const newFormationArray = matchWord(formations, questions[(questions.length - 1) - questionCounter].keywords);
            setFormations(newFormationArray);
        }
    };

    const value = useMemo(() => {
        return { questions, setQuestions, formations, setFormations, nextQuestion, questionCounter };
    }, [questions, formations]);

    return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
}

export function useQuestionContext() {
    return useContext(QuestionContext);
}

const matchWord = (array, keywords) => {
    const newArray = array.map((formation) => {
        let score = formation?.score || 0;
        let regexFromKeyword = new RegExp(keywords.join("|"), "gm");

        const matchTeam = JSON.stringify(formation).match(regexFromKeyword);
        if (matchTeam) score++;

        return { ...formation, score };
    });

    return newArray;
};
