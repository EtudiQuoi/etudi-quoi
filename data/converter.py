import xmltodict
import json

file_name = 'data'
print('converting...')

with open('{}.xml'.format(file_name), 'r', encoding='utf-8') as myfile:
    obj = xmltodict.parse(myfile.read())

json_object = json.dumps(obj, indent = 4)
json_output = json.loads(json_object)

new_json = {}
new_json['FICHES'] = []

def optional_chain(root, *keys):
    result = root
    for k in keys:
        if isinstance(result, dict):
            result = result.get(k, None)
        else:
            result = getattr(result, k, None)
        if result is None:
            break
    return result

for fiche in json_output['FICHES']['FICHE']:
    new_json['FICHES'].append({ 
        'ID_FICHE': optional_chain(fiche, 'ID_FICHE'), 
        'NUMERO_FICHE': optional_chain(fiche, 'NUMERO_FICHE'), 
        'INTITULE': optional_chain(fiche, 'INTITULE'), 
        'ABREGE': optional_chain(fiche, 'ABREGE'), 
        'CODES_NSF': optional_chain(fiche, 'CODES_NSF'), 
        'ACTIVITES_VISEES': optional_chain(fiche, 'ACTIVITES_VISEES'), 
        'CAPACITES_ATTESTEES': optional_chain(fiche, 'CAPACITES_ATTESTEES'), 
        'SECTEURS_ACTIVITE': optional_chain(fiche, 'SECTEURS_ACTIVITE'), 
        'TYPE_EMPLOI_ACCESSIBLES': optional_chain(fiche, 'TYPE_EMPLOI_ACCESSIBLES'), 
        'CODES_ROME': optional_chain(fiche, 'CODES_ROME'),
        'BLOCS_COMPETENCES': optional_chain(fiche, 'BLOCS_COMPETENCES'),
    })

with open("{}.json".format(file_name), "w", encoding='utf-8') as outfile:
    json.dump(new_json, outfile, indent=4)