
##  Comment  contribuer au projet  Étudi’Quoi.

Vous voulez permettre à  Étudi’Quoi, de se développer et de devenir plus précis dans ses résultats ? Contribuez au projet en remplissant et en complétant la base de données de questions.

En fonction de vos  études / métier, renseignez les compétences et les appétences requises pour le bon déroulement de celui-ci. Vous pouvez remplir les mots clefs d’une question existante ou en créer une nouvelle.

Commencez par naviguer dans le dossier  Data\Config.json,  ouvrez-le. Vous verrez toutes les questions actuellement utilisées par l’algorithme, commencez par regarder comment le fichier est hiérarchisé avant de le modifier. Vous trouverez :

 - “id” : C’est l’identifiant de la question, il permet à l’algorithme
   de venir sélectionner une question et de les différencier entre
   elles. Vous n’aurez qu’à assigner un nouveau numéro à la vôtre.
 - “label” : C’est le nom de la question qui sera affiché dans
   l’application.
 - “keywords” : Ce  sont les mots  clef  que l’algorithme vient chercher
   pour grouper les questions et en ressortir des formations.
   L’assemblement de plusieurs  keywords  donne les résultats.
 - “nsf” : C’est un code de référencement  élaboré  par l'Insee dans le
   cadre du Conseil national de l'information statistique, la
   nomenclature des spécialités de formation, couvre l'ensemble des
   formations, quel qu'en soit le niveau : formations initiales ou
   continues, secondaires ou supérieures, professionnelles ou non. Il
   sert aussi à l’algorithme dans le cas où les  keywords  ne suffisent
   pas. Vous pouvez trouver la liste des  keywords  ici : [Codes 
   NSFs.xlsx](https://docs.google.com/spreadsheets/d/1cJzJtcfU08uh0T8EWiUBaVGqxbRpr1fA/edit#gid=1223005889)
 - "strength" : Sers à l’algorithme pour déterminer si la question   
   ajoute ou supprime des points aux formations associées. Si vous   
   voulez, vous pouvez faire une question “négative” ce qui veut dire   
   qu’elle enlèvera des points à la formation si l’utilisateur répond   
   oui.
 - “category” : Choisissez  entre trois types de questions :   
   character  : question qui porte sur le caractère d’une personne   
   skills  : question qui porte sur les compétences d’une personne   
   interest  : question qui porte sur les intérêts d’une personne

Maintenant que  vous savez comment le fichier fonctionne, vous pouvez commencer à y contribuer. Cliquez sur le bouton “Edit  this  file”  (le petit stylo en haut à droite du texte)  et commencez à  ajouter / modifier  des questions. Une fois que vous avez fini,  descendez  en bas de la page, vous trouverez un panneau “Commit  your  changes”. Donnez un nom à vos changements, et cliquez sur “Propose changes”.

Voilà, vos changements ont été envoyés à notre équipe et après vérification, ils seront ajoutés au projet :)
