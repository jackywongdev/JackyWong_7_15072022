# Projet JackyWong_7_15072022


OpenClassrooms projet 7


# Groupomania

Projet numéro 7 du parcours Développeur Web chez OpenClassrooms : "Créez un réseau social d’entreprise"

Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web regroupant une douzaine d'employés.

Votre directrice, Stéphanie, vient de signer un nouveau contrat avec Groupomania, un groupe spécialisé dans la grande distribution, et l'un des plus fidèles clients de l'agence.


## Langages

Back
- Node
- Express
- MongoDB

Front
- React
- Redux
- Ant Design
- SASS 

## Scénario

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.

Après en avoir discuté avec Caroline, votre manager, elle vous envoie un mail pour vous briefer sur votre mission :


Objet : Lancement projet Groupomania
De : Caroline
À : Moi

Bonjour,

Comme on a pu en parler, tu trouveras en pièce jointe le brief que j’ai pu établir à la suite des différentes réunions effectuées avec Stéphanie et la représentante de Groupomania. Tu trouveras également les logos de l’organisation pour l’habillage du site. 

Pour résumer ta mission : à partir du brief, tu vas devoir produire une toute première version du projet, que nous pourrons faire tester à quelques employés de Groupomania pour valider la partie fonctionnelle. 

En ce qui concerne l’aspect graphique, nous allons pour le moment limiter les choses au minimum, c’est-à-dire :
respecter l’identité graphique fournie dans le brief ;
produire quelque chose de responsive qui s'adapte aux desktop, tablette et mobile ;
tout le reste est expliqué sur le brief. À part ça, tu as carte blanche, mais attention à ne pas te lancer dans quelque chose de trop compliqué.
Côté technique aussi, nous sommes assez libres sur ce projet ; néanmoins il y a quelques éléments qu’il faut avoir en tête avant de commencer le projet :
pour ce nouveau projet on part vraiment de zéro, tu vas donc devoir mettre en place le backend, le frontend et la base de données ;
le projet doit être codé en JavaScript et respecter les standards WCAG ;
il est obligatoire d’utiliser un framework front-end JavaScript. Comme on part de zéro, libre à toi d’utiliser celui que tu préfères (React, Vue, Angular…). Je te conseille d’utiliser React, mais ça reste à toi de décider ;
pour la base de données, tu peux utiliser les outils de ton choix. Tu peux utiliser soit une base de données non relationnelle, comme mongoDB par exemple, soit une base de données relationnelle (en t’aidant d’un ORM si tu le souhaites) ;
pense à bien fournir un README avec ton code, expliquant comment installer le site sur un nouveau poste.

pour démarrer le projet:

il faudra ce rendre dans le dossier .back/config créer un fichier .env et y mettre:

PORT=5000
CLIENT_URL=htpp://localhost:3000
DB_USER_PASS=SuperAdmin:VeryComplicatedBecauseItsCool94400
JWT_TOKEN="eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.J5W09-rNx0pt5_HBiydR-vOluS6oD-RpYNa8PVWwMcBDQSXiw6-EPW8iSsalXPspGj3ouQjAnOP_4-zrlUUlvUIt2T79XyNeiKuooyIFvka3Y5NnGiOUBHWvWcWp4RcQFMBrZkHtJM23sB5D7Wxjx0-HFeNk-Y3UJgeJVhg5NaWXypLkC4y0ADrUBfGAxhvGdRdULZivfvzuVtv6AzW6NRuEE6DM9xpoWX_4here-yvLS2YPiBTZ8xbB3axdM99LhES-n52lVkiX5AWg2JJkEROZzLMpaacA_xlbUz_zbIaOaoqk8gB5oO7kI6sZej3QAdGigQy-hXiRnW_L98d4GQ"


Pour la partie front il faudra ce rendre dans le dossierr front créer a la racine le fichier .env et y mettre:

REACT_APP_API_URL=http://localhost:5000


pour installer le projet ouvrir 2 terminaux 

cd back
npm install
npm start

cd front
npm install
npm start



