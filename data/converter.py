import xmltodict
import json

# with open("config.json") as myfile

with open('export_fiches_RNCP.xml', 'r', encoding='utf-8') as myfile:
    obj = xmltodict.parse(myfile.read())
json_object = (json.dumps(obj, indent = 4))

with open("export.json", "w", encoding='utf-8') as outfile:
    outfile.write(json_object)

    # 1 charger la config
    #  charger le fichier de données
    #  itérer sur les questions de la config
    #  dans chaque questions, itérer sur chaque formation
    #  on cherche s'il y a au moins un mot clé dans le texte
    #  si non , on passe
    #  si oui, on ajoute l'id de la formation dans le tableau de la questions
    #  écrire un fichier avec les questions avec les formations et le code pour
    #  itére sur les formations et on prépare les champs pour l'affichage (prendre les champs qui nous intéressent)