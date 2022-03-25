import xmltodict
import json
import xml.etree.ElementTree as ET
import re

config = json.load(open("./data/config.json", encoding='utf-8'))

# with open('./data/export_fiches_RNCP.xml', 'r', encoding='utf-8') as myfile:
#     obj = xmltodict.parse(myfile.read())
# json_object = (json.dumps(obj, indent = 4))

root = ET.parse("./data/export_fiches_RNCP.xml").getroot()

# print(root[1][1].text)

idList = []
questions = []

# print(root["FICHE"])




for object in config:
    for keyword in object["keywords"]:
        for fiche in root:
            print(fiche[0].text)
            for child in fiche:
                if (child.text.find(keyword) != -1):
                    print(keyword)
                    print(child.text)
                    if fiche[0].text not in idList:
                        idList.append(fiche[0].text)
                print("_______________")
            print("----------------")
    questions.append({"label": object.label, "id": idList})


print(idList)
print("_______________")
print(questions)
# with open("export.json", "w", encoding='utf-8') as outfile:
#     outfile.write(json_object)

    # 1 charger la config
    #  charger le fichier de données
    #  itérer sur les questions de la config
    #  dans chaque questions, itérer sur chaque formation
    #  on cherche s'il y a au moins un mot clé dans le texte
    #  si non , on passe
    #  si oui, on ajoute l'id de la formation dans le tableau de la questions
    #  écrire un fichier avec les questions avec les formations et le code pour
    #  itére sur les formations et on prépare les champs pour l'affichage (prendre les champs qui nous intéressent)

