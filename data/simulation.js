const fs = require("fs");

console.log("simulation...");

const rawQuestionsData = fs.readFileSync(`${__dirname}/config.json`);
const questionData = JSON.parse(rawQuestionsData);

const rawFormationData = fs.readFileSync(`${__dirname}/data.json`);
const formationData = JSON.parse(rawFormationData);

const json = { questions: [], formations: [] };

const matchWord = (array, keywords, codes) => {
    const matchArray = array.filter((formation) => {
        const regexFromKeyword = new RegExp(keywords.join("|"), "gm");

        let nsf = false;
        if (Array.isArray(formation.CODES_NSF?.NSF)) {
            nsf = formation.CODES_NSF.NSF.filter((code) => codes.includes(code)).length > 0;
        } else {
            nsf = codes.includes(formation.CODES_NSF?.NSF?.CODE);
        }

        const match = JSON.stringify(formation).match(regexFromKeyword);
        if (match || nsf) return true;
    });

    return matchArray;
};

formationData.FICHES.forEach((element) => {
    json.formations.push({
        formation_id: element?.ID_FICHE,
        rncp: element?.NUMERO_FICHE,
        level: element?.NOMENCLATURE_EUROPE?.NIVEAU,
        label: element?.INTITULE,
        type: element?.ABREGE?.LIBELLE || element?.ABREGE?.CODE || null,
    });
});

questionData.questions.forEach((element) => {
    const matchFormation = matchWord(formationData.FICHES, element.keywords, element.nsf);
    const formationIdArray = matchFormation.map((formation) => {
        return formation.ID_FICHE;
    });

    json.questions.push({ question_id: element.id, question: element.label, category: element.category, formations: formationIdArray });
});

fs.writeFile(`${__dirname}/../public/simulation.json`, JSON.stringify(json, null, 4), "utf8", function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});
