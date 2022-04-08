const fs = require("fs");

console.log('Simulation...');

const rawQuestionsData = fs.readFileSync(`${__dirname}/config.json`);
const questionData = JSON.parse(rawQuestionsData);

const rawFormationData = fs.readFileSync(`${__dirname}/data.json`);
const formationData = JSON.parse(rawFormationData);

const json = { questions: [], formations: [] };

const matchWord = (array, keywords) => {
    const matchArray = array.filter((formation) => {
        const regexFromKeyword = new RegExp(keywords.join("|"), "gm");

        const matchTeam = JSON.stringify(formation).match(regexFromKeyword);
        if (matchTeam) return true;
    });

    return matchArray;
};

formationData.FICHES.forEach((element) => {
    json.formations.push({
        formation_id: element?.ID_FICHE,
        label: element?.INTITULE,
        type: element?.ABREGE?.LIBELLE || element?.ABREGE?.CODE || null,
    });
});

questionData.questions.forEach((element) => {
    const matchFormation = matchWord(formationData.FICHES, element.keywords);
    const formationIdArray = matchFormation.map((formation) => {
        return formation.ID_FICHE;
    });

    json.questions.push({ question_id: element.id, question: element.label, formations: formationIdArray });
});

fs.writeFile(`${__dirname}/../public/simulation.json`, JSON.stringify(json, null, 4), "utf8", function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});
