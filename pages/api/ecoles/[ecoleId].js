import data from "../../../data/data.json";

export default function handler(req, res) {
  const { ecoleId } = req.query;
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  const formation = data.FICHES.filter(
    (formation) => formation.ID_FICHE === ecoleId
  );
  const certificateurs = [];

  Object.values(formation[0].CERTIFICATEURS.CERTIFICATEUR).forEach((row) => {
    certificateurs.push(row.NOM_CERTIFICATEUR);
  });
  res.status(200).json(certificateurs);
}
