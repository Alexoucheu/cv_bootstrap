# cv_bootstrap

Projet pour le cours "Outils_de_developpement_site_web" *de johannchopin* à l'ISFATES.

---

> L'interface utilisateur à été testée sur :
> - Iphone 14/15/16 IOS w/ 18.6
> - Galaxy Tab 9
> - Laptop with MDPI screen

---

# Comment accéder au site (deux solutions) :
 - Y accéder via mon site en ligne : [ici](https://graoully-ag.worldlite.fr/web-cv-gaildratalexis/)
 - Le télécharger manuellement

## Le télécharger manuellement

Vérifier si vous avez npm d'installé, si non
'''bash
sudo apt install npm
'''

Ensuite changez de répertoire pour aller dans celui où vous voulez installer le serveur et clonez le git
'''bash
cd votrerepertoire/
git clone "https://github.com/Alexoucheu/cv_bootstrap"
'''

Allez au répertoire cv_bootstrap ainsi crée
'''bash
cd cv_boostsrap/
Installez les modules nécéssaires
'''bash
npm install
'''

Il faut aussi avoir nodejs d'installé sinon installez-le.

Allez au répertoire site
'''bash
cd site/
'''

Démarrez le serveur
'''bash
npm run preview
'''

Et ensuite dans une nouvelle page tapez
'''text
localhost:xxxx/
'''
avec xxxx le port donné par npm.

Et voila c'est tout bon !
