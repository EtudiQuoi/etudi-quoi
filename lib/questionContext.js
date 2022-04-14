import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const QuestionContext = createContext();

export default function QuestionWrapper({ children }) {
    const router = useRouter();

    const [questions, setQuestions] = useState([]);
    const [formations, setFormations] = useState([]);
    const [questionCounter, setQuestionCounter] = useState(0);

    useEffect(() => {
        fetchJson("./simulation.json").then((data) => {
            const questionsArray = shuffleArray([...data.questions]);
            setQuestions(questionsArray);
            setFormations(data.formations);
        });
    }, []);

    useEffect(() => {
        if (formations.length > 0 && formations.length <= 10) router.push("/results");
    }, [formations]);

    const nextQuestion = (id, vote) => {
        setQuestionCounter(questionCounter + 1);
        if (questionCounter > questions.length - 1) return;
        if (!vote) return;

        const question = questions.find((question) => question.question_id === id);
        // const newFormations = formations.filter((formation) => question.formations.includes(formation.formation_id));

        const newFormations = formations.map((formation) => {
            if (question.formations.includes(formation.formation_id)) {
                const score = formation.score ? formation.score + vote : vote;
                return { ...formation, score };
            }
            return formation;
        });
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
