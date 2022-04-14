import data from "../../../data/data.json";

export default function handler(req, res) {
  const { ecoleId } = req.query;
  const response = data.FICHES.filter(
    (formation) => formation.ID_FICHE === ecoleId
  );
  res.status(200).json(response);
}
