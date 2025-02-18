# HomeMade - Food Ordering Web Application

**Author : [@RubnK](https://github.com/RubnK)**

HomeMade is a web application enabling users to order dishes prepared by renowned chefs. The application features intuitive navigation, an authentication system and a personalized shopping cart for each user.

## Features
- **Registration and Login**: Account creation and authentication.
- **Chef List**: View available chefs and their specialties.
- **Basket**: Basket management with data persistence.
- **Data**: Authentication and sessions stored locally.
- **Responsive design**: Interface optimized for mobile and desktop.

## Technologies used
- Vue.js 3
- Vue Router
- Pinia Pinia (Status management)
- LocalStorage (Data persistence)

## Project structure
```
/home-made-app
│── src
│   │── assets/         # Fichiers CSS et images
│   │── components/     # Composants réutilisables (Header, Footer, Cart...)
│   │── pages/         # Pages principales de l'application
│   │── stores/        # Stores Pinia (gestion des utilisateurs et du panier)
│   │── App.vue        # Composant racine
│   │── main.js        # Entrée principale de l'application
│── public/            # Fichiers statiques
│── README.md          # Documentation du projet
│── package.json       # Dépendances et scripts npm
```

## Installation and Execution
1. **Run project**
```sh
git clone https://github.com/RubnK/homemade-vuejs.git
cd home-made-app
```
2. **Install dependencies
```sh
npm install
```
3. **Start development server**
```sh
npm run dev
```

## Additional configuration
- To modify global styles, edit the `src/assets/style.css` file.
- To manage users, see `src/stores/auth.js`.
- To manage the shopping cart, see `src/stores/cart.js`.

## License
This project is licensed under the MIT License.